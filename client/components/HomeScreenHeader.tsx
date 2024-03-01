import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const HomeScreenHeader = () => {
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
      <View style={styles.header2}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.textMd}>TV Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.textMd}>TV Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.textMd}>TV Shows</Text>
        </TouchableOpacity>
      </View>
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
export default HomeScreenHeader;
