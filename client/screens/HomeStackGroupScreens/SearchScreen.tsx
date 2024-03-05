import {
  ActivityIndicator,
  FlatList,
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import React, { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProp, MovieType } from "../../types/movieTypes";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchMovies } from "../../features/movie/movieSlice";

const SearchScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState<string>("");

  // Ref For SearchBar
  const inputRef = useRef<TextInput>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const response = fetch(
        `http://localhost:3000/pub/movies?title=${searchValue}`
      )
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch data");
          return response.json();
        })
        .then((data) => {
          setMovies(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, 500);
    return () => clearTimeout(debounce);
  }, [searchValue]);

  return (
    <SafeAreaView>
      {/* Back Button and SearchBar */}
      <View style={styles.searchBarContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="gray" />
        </TouchableOpacity>
        <View style={styles.searchInput}>
          <TextInput
            placeholder="Search movies..."
            placeholderTextColor={"lightgray"}
            ref={inputRef}
            onChangeText={(value) => setSearchValue(value)}
          />
        </View>
      </View>
      {isLoading ? (
        <ActivityIndicator size={"large"} color={"gray"} />
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <Animated.View
              entering={FadeIn}
              exiting={FadeOut}
              style={{
                borderRadius: 10,
                width: 180,
                height: 250,
                backgroundColor: "red",
                overflow: "hidden",
                margin: 10,
              }}
            >
              <Image
                style={{ height: 250 }}
                source={{ uri: item.imgUrl }}
                resizeMode="stretch"
              />
            </Animated.View>
          )}
          style={{
            marginHorizontal: 10,
            alignSelf: "center",
          }}
          keyExtractor={(item) => item.slug}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode={"on-drag"}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 10,
    marginLeft: 5,
  },
});
