import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeStackParamList } from "../../types/navigationTypes";

const MovieDetail = () => {
  const {
    params: { slug },
  } = useRoute<RouteProp<HomeStackParamList, "MovieDetailScreen">>();
  return (
    <SafeAreaView>
      <Text style={styles.textLg}>Movie Id: {slug}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textLg: {
    fontSize: 20,
    color: "#F5F5F5",
    fontWeight: "bold",
  },
  posterContainer: {
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 10,
  },
});

export default MovieDetail;
