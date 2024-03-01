import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigationTypes";
import { MovieType } from "../types/movieTypes";

type ItemProps = {
  sectionName: string;
  movies: MovieType[];
};

export default function MovieSection({ sectionName, movies }: ItemProps) {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigateToMovieDetail = (id: number) => {
    navigate("Home", {
      screen: "MovieDetailScreen",
      params: { id },
    });
  };

  return (
    <View>
      <Text style={styles.textLg}>{sectionName}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleNavigateToMovieDetail(item.id)}
            style={styles.posterContainer}
          >
            <Image
              height={200}
              width={120}
              source={{ uri: item.imgUrl }}
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
