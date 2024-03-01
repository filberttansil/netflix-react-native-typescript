import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  HomeStackParamList,
  RootStackParamList,
} from "../../types/navigationTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

const ProfileScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Text style={{ color: "white" }}>ProfileScreen</Text>
      <Button
        title="Movie Detail : Id : 1"
        onPress={() =>
          navigation.navigate("Home", {
            screen: "MovieDetailScreen",
            params: { id: 1 },
          })
        }
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
