import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { GenreType, HomeStackNavigationProp } from "../types/movieTypes";
import { useAppDispatch } from "../hooks/hooks";
import {
  fetchMovies,
  filterMoviesByCategory,
} from "../features/movie/movieSlice";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { HomeStackParamList } from "../types/navigationTypes";
import { useNavigation } from "@react-navigation/native";
type Props = {
  genres: GenreType[];
  children: React.ReactNode;
};
const HomeScreenHeader = ({ genres, children }: Props) => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const [focusedGenreId, setFocusedGenreId] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const handleFilterButton = (genreId: number) => {
    if (focusedGenreId === genreId) {
      setFocusedGenreId(null);
      dispatch(fetchMovies());
    } else {
      setFocusedGenreId(genreId);
      dispatch(filterMoviesByCategory(genreId));
      console.log(genreId);
    }
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header1}>
        <Text style={styles.textLg}>For Corry</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
          <Ionicons
            style={{ marginRight: 20 }}
            name="search"
            size={24}
            color={"#F5F5F5"}
          />
        </TouchableOpacity>
      </View>
      {/* Filter */}
      <ScrollView horizontal style={styles.header2}>
        {genres?.map((genre) => {
          return (
            <TouchableOpacity
              key={genre.id}
              style={[
                styles.filterButton,
                focusedGenreId === genre.id
                  ? { backgroundColor: "darkgray" }
                  : {},
              ]}
              onPress={() => handleFilterButton(genre.id)}
            >
              <Text style={styles.textMd}>{genre.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  textLg: {
    fontSize: 25,
    color: "#F5F5F5",
    fontWeight: "bold",
  },
  textMd: {
    fontSize: 14,
    color: "#F5F5F5",
    fontWeight: "700",
  },
  headerContainer: {
    padding: 5,
  },
  header1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  header2: {
    flexDirection: "row",
    gap: 7,
    marginBottom: 20,
  },
  filterButton: {
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 9999,
    marginRight: 8,
  },
  featuredMovieContainer: {
    borderRadius: 15,
    overflow: "hidden",
  },
  featuredMovieDetail: {
    paddingHorizontal: 15,
    width: "100%",
    position: "absolute",
    bottom: 5,
    alignItems: "center",
  },
  movieDetailButton: {
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
  },
});
export default HomeScreenHeader;
