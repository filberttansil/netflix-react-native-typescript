import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import MovieSection from "../../components/MovieSection";
import HomeScreenHeader from "../../components/HomeScreenHeader";
import FeaturedMovieSection from "../../components/FeaturedMovieSection";
import { state } from "../../constants/movies";
import { fetchMovies, selectMovieState } from "../../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/hooks";

const Home = () => {
  const dispatch = useAppDispatch();
  const { sections } = useSelector(selectMovieState);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <SafeAreaView>
      <HomeScreenHeader />

      <FlatList
        data={sections}
        renderItem={({ item }) => (
          <MovieSection sectionName={item.title} movies={item.movies} />
        )}
        keyExtractor={(item) => item.title}
        ListHeaderComponent={() => <FeaturedMovieSection />}
        ListHeaderComponentStyle={{ marginBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default Home;
