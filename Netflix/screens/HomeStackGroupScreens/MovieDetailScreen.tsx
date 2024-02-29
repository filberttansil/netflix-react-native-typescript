import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import { MovieType } from "../../components/MovieSection";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  HomeStackParamList,
  MovieDetailProp,
} from "../../navigation/Navigator";

const MovieDetail = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const {
    params: {
      movie: { id, title, imageUrl },
    },
  } = useRoute<MovieDetailProp>();
  return (
    <SafeAreaView>
      <Text style={styles.textLg}>{title}</Text>
      <Button onPress={() => navigation.goBack()} title="Back" />
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
