import {
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
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import React, { useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProp } from "../../types/movieTypes";
import { useAppSelector } from "../../hooks/hooks";
import { Button } from "react-native-elements";

const SearchScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const movies = useAppSelector((state) => state.movies.movies);
  // Animation
  const width = useSharedValue(0);

  // Ref For SearchBar
  const inputRef = useRef<TextInput>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      width.value = withSpring(width.value + 180);
      inputRef.current?.focus();
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView>
      {/* Back Button and SearchBar */}
      <View style={styles.searchBarContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="gray" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search movies..."
          placeholderTextColor={"lightgray"}
          ref={inputRef}
        />
      </View>

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <Animated.View
            style={{
              borderRadius: 10,
              width,
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
