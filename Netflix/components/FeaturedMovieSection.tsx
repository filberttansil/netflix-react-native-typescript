import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { state } from "../constants/movies";
const FeaturedMovieSection = () => {
  const movies = state.listCategories[0].movies;
  const { height, width } = useWindowDimensions();
  return (
    <View style={styles.featuredMovieContainer}>
      <Image
        source={{ uri: movies[0].imageUrl }}
        height={height / 2}
        style={{ opacity: 0.8 }}
      />
      <View style={styles.featuredMovieDetail}>
        <Text style={styles.textLg}>Movie Title</Text>
        <Text style={styles.textMd}>Category</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity
            style={[
              { backgroundColor: "white", flex: 1 },
              styles.movieDetailButton,
            ]}
          >
            <AntDesign name="playcircleo" size={24} color={"black"} />
            <Text style={{ fontWeight: "bold" }}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.movieDetailButton,
              { backgroundColor: "#282828", flex: 1 },
            ]}
          >
            <AntDesign name="download" size={24} color={"white"} />
            <Text style={{ color: "white", fontWeight: "bold" }}>Download</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  movieSection: {
    marginBottom: 15,
  },
  textLg: {
    fontSize: 25,
    color: "#F5F5F5",
    fontWeight: "bold",
  },
  textMd: {
    fontSize: 12,
    color: "#F5F5F5",
    fontWeight: "600",
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
export default FeaturedMovieSection;
