import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigationTypes";
import { MovieType } from "../types/movieTypes";
import { Image } from "react-native-elements";

type ItemProps = {
  sectionName: string;
  movies: MovieType[];
};

export default function MovieSection({ sectionName, movies }: ItemProps) {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigateToMovieDetail = (slug: string) => {
    navigate("Home", {
      screen: "MovieDetailScreen",
      params: { slug },
    });
  };

  return (
    <View>
      <Text style={styles.textLg}>{sectionName}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleNavigateToMovieDetail(item.slug)}
            style={styles.posterContainer}
          >
            <Image
              source={{ uri: item.imgUrl }}
              style={styles.poster}
              PlaceholderContent={
                <ActivityIndicator
                  style={styles.poster}
                  size={"large"}
                  color={"white"}
                />
              }
            />
            {/* {imageIsLoading ? (
              <ActivityIndicator
                style={styles.poster}
                size={"large"}
                color={"white"}
              />
            ) : (
              <Image
                onLoadStart={() => setImageIsLoading(true)}
                onLoadEnd={() => setImageIsLoading(false)}
                style={[
                  styles.poster,
                  { zIndex: 0 },
                  imageIsLoading && { display: "none" },
                ]}
               
              />
            )} */}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
}
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
  poster: {
    height: 200,
    width: 120,
  },
});
