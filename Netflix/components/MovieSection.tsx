import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { themes } from "../themes/themes";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { HomeStackParamList } from "../navigation/Navigator";

export type MovieType = {
  id: number;
  title: string;
  imageUrl: string;
};

type ItemProps = {
  sectionName: string;
  movies: MovieType[];
};

export default function MovieSection({ sectionName, movies }: ItemProps) {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const handleNavigateToMovieDetail = (movie: MovieType) => {
    navigation.navigate("MovieDetail", { movie });
  };

  return (
    <View>
      <Text style={styles.textLg}>{sectionName}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleNavigateToMovieDetail(item)}
            style={styles.posterContainer}
          >
            <Image
              height={200}
              width={120}
              source={{ uri: item.imageUrl }}
              //   resizeMode="contain"
            />
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
});
