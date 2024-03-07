import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  HomeStackParamList,
  RootStackParamList,
} from "../../types/navigationTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import { useAppDispatch } from "../../hooks/hooks";
import { setAuthenticated } from "../../features/auth/authSlice";
type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

const ProfileScreen = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync("access_token");
      dispatch(setAuthenticated(false));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <Text style={{ color: "white" }}>ProfileScreen</Text>
      <Button onPress={handleLogout}>Logout</Button>
    </SafeAreaView>
  );
};

export default ProfileScreen;
