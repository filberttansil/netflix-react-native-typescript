import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { s } from "../../themes/style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types/navigationTypes";
import { Button } from "react-native-paper";

const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList>) => {
  return (
    <SafeAreaView>
      <Button onPress={() => navigation.navigate("Register")}>Register</Button>
    </SafeAreaView>
  );
};

export default LoginScreen;
