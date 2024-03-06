const { Op } = require("sequelize");
const { Movie, Genre, Cast, User } = require("../models");

class PubController {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      console.log("first");
      const created = await User.create({
        username,
        email,
        password,
        role: "user",
        phoneNumber,
        address,
      });

      res.status(201).json({
        id: created.id,
        username: created.username,
        email: created.email,
        role: created.role,
      });
    } catch (error) {
      next(error);
    }
  }
  static async getMovies(req, res, next) {
    try {
      const { title } = req.query;
      const searchCondition = title
        ? { title: { [Op.iLike]: `%${title}%` } }
        : {};

      const movies = await Movie.findAll({
        order: [["id", "ASC"]],
        where: searchCondition,
        include: [
          {
            model: Genre,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: Cast,
            order: [["id", "ASC"]],
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });

      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  }

  static async getMovieDetails(req, res, next) {
    try {
      const { slug } = req.params;
      const movie = await Movie.findOne({
        where: { slug },
        include: [
          {
            model: Genre,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: Cast,
            order: [["id", "ASC"]],
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });

      if (!movie) throw { name: "NotFound" };
      res.status(200).json(movie);
    } catch (error) {
      next(error);
    }
  }
  static async getGenres(req, res, next) {
    try {
      const { name } = req.query;
      const searchCondition = name ? { name: { [Op.iLike]: `%${name}%` } } : {};

      const genres = await Genre.findAll({
        order: [["id", "ASC"]],
        where: searchCondition,
      });
      res.status(200).json(genres);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PubController;
