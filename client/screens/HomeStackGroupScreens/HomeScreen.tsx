import { SafeAreaView, StyleSheet, FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import MovieSection from "../../components/MovieSection";
import HomeScreenHeader from "../../components/HomeScreenHeader";
import FeaturedMovieSection from "../../components/FeaturedMovieSection";
import {
  fetchGenres,
  fetchMovies,
  filterMoviesByCategory,
  selectMovieState,
} from "../../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/hooks";
import { HomeStackParamList } from "../../types/navigationTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type Props = NativeStackScreenProps<HomeStackParamList, "HomeScreen">;
const Home = ({ route }: Props) => {
  const dispatch = useAppDispatch();
  const { sections, genres } = useSelector(selectMovieState);
  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={sections}
        renderItem={({ item }) => (
          <MovieSection sectionName={item.title} movies={item.movies} />
        )}
        keyExtractor={(item) => item.title}
        ListHeaderComponent={() => (
          <View>
            <HomeScreenHeader genres={genres} />
            {route.name === "HomeScreen" ? <FeaturedMovieSection /> : null}
          </View>
        )}
        ListHeaderComponentStyle={{
          marginBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default Home;
