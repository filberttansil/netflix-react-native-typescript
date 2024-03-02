import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { GenreType } from "../types/movieTypes";
import { useAppDispatch } from "../hooks/hooks";
import { filterMoviesByCategory } from "../features/movie/movieSlice";
type Props = { genres: GenreType[] };
const HomeScreenHeader = ({ genres }: Props) => {
  const [focusedGenreId, setFocusedGenreId] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const handleFilterButton = (genreId: number) => {
    setFocusedGenreId(genreId);
    dispatch(filterMoviesByCategory(genreId));
    console.log(genreId);
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header1}>
        <Text style={styles.textLg}>For Corry</Text>
        <Ionicons
          style={{ marginRight: 20 }}
          name="search"
          size={24}
          color={"#F5F5F5"}
        />
      </View>
      {/* Filter */}
      <ScrollView horizontal style={styles.header2}>
        {genres.map((genre) => {
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
    padding: 10,
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
