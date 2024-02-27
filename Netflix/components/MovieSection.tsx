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

type ItemProps = {
  sectionName: string;
  movies: {
    id: number;
    title: string;
    imageUrl: string;
  }[];
};

export default function MovieSection({ sectionName, movies }: ItemProps) {
  return (
    <View>
      <Text style={styles.textLg}>{sectionName}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.posterContainer}>
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
