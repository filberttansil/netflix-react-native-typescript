export interface CastType {
  id: number;
  movieId: number;
  name: string;
  profilePict: string;
}
export interface GenreType {
  id: number;
  name: string;
}
export interface MovieType {
  id: number;
  title: string;
  slug: string;
  synopsis: string;
  trailerUrl: string;
  imgUrl: string;
  rating: number;
  genreId: number;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
  Genre: GenreType[];
  Casts: CastType[];
}

export interface SectionType {
  title: string;
  movies: MovieType[];
}

export interface MovieState {
  sections: SectionType[];
  movies: MovieType[];
  genres: GenreType[];
  loading: boolean;
  error: string | undefined;
}

export interface GenreType {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
