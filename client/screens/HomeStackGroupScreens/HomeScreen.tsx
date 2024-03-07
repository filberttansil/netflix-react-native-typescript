import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import MovieSection from "../../components/MovieSection";
import HomeScreenHeader from "../../components/HomeScreenHeader";
import FeaturedMovieSection from "../../components/FeaturedMovieSection";
import {
  fetchGenres,
  fetchMovies,
  selectMovieState,
} from "../../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/hooks";
import { HomeStackParamList } from "../../types/navigationTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import { setAuthenticated } from "../../features/auth/authSlice";

type Props = NativeStackScreenProps<HomeStackParamList, "HomeScreen">;
const Home = ({ route }: Props) => {
  const dispatch = useAppDispatch();
  const { sections, genres, loading } = useSelector(selectMovieState);
  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);
    dispatch(fetchMovies()).then(() =>
      dispatch(fetchGenres())
        .then(() => setRefreshing(false))
        .catch((err) => {
          setRefreshing(false);
          console.log(err);
        })
    );
  };

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 400 }}
          size={"large"}
          color={"gray"}
        />
      ) : (
        <HomeScreenHeader genres={genres}>
          <FlatList
            data={sections}
            renderItem={({ item }) => (
              <MovieSection sectionName={item.title} movies={item.movies} />
            )}
            keyExtractor={(item) => item.title}
            ListHeaderComponent={() => (
              <View>
                {route.name === "HomeScreen" ? <FeaturedMovieSection /> : null}
              </View>
            )}
            ListHeaderComponentStyle={{
              marginBottom: 20,
            }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => (
              <View style={{ width: "100%", height: 200 }} />
            )}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </HomeScreenHeader>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default Home;
