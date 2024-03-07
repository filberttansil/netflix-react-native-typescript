import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { s } from "../../themes/style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types/navigationTypes";
import { Button, TextInput } from "react-native-paper";
import { useAppDispatch } from "../../hooks/hooks";
import { login, setAuthenticated } from "../../features/auth/authSlice";
import * as SecureStore from "expo-secure-store";
interface LoginFormType {
  email: string;
  password: string;
}

const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList>) => {
  const dispatch = useAppDispatch();
  const initialState = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState<LoginFormType>(initialState);
  const handleChange = (key: keyof LoginFormType, value: string) => {
    setForm({ ...form, [key]: value });
  };
  const handleSubmit = () => {
    dispatch(login(form));
  };
  const checkAuthenticated = async () => {
    try {
      const access_token = await SecureStore.getItemAsync("access_token");
      console.log(access_token);
      if (!access_token) {
        dispatch(setAuthenticated(false));
      } else {
        dispatch(setAuthenticated(true));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkAuthenticated();
  }, []);
  return (
    <SafeAreaView>
      <Text style={s.header}>Login</Text>
      <TextInput
        label={"Email"}
        mode="outlined"
        value={form.email}
        onChangeText={(text) => handleChange("email", text)}
        style={{ backgroundColor: "gray" }}
        activeOutlineColor="darkgray"
        autoCapitalize="none"
      />
      <TextInput
        label={"Password"}
        mode="outlined"
        value={form.password}
        onChangeText={(text) => handleChange("password", text)}
        style={{ backgroundColor: "gray" }}
        activeOutlineColor="darkgray"
        secureTextEntry
      />
      <Button onPress={handleSubmit} mode="contained" style={s.authButton}>
        Sign In
      </Button>
      <Button onPress={() => navigation.navigate("Register")}>Register</Button>
    </SafeAreaView>
  );
};

export default LoginScreen;
