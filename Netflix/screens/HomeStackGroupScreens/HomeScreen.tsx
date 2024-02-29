import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import React from "react";
import MovieSection from "../../components/MovieSection";
import HomeScreenHeader from "../../components/HomeScreenHeader";
import FeaturedMovieSection from "../../components/FeaturedMovieSection";
import { state } from "../../constants/movies";

const Home = () => {
  return (
    <SafeAreaView>
      <HomeScreenHeader />

      <FlatList
        data={state.listCategories}
        renderItem={({ item }) => (
          <MovieSection sectionName={item.title} movies={item.movies} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <FeaturedMovieSection />}
        ListHeaderComponentStyle={{ marginBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default Home;
