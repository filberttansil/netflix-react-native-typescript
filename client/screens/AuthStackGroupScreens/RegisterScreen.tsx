import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { s } from "../../themes/style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TextInput } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types/navigationTypes";
import { User, register } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../hooks/hooks";

const RegisterScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList>) => {
  const initialForm = {
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  };
  const [form, setForm] = useState<User>(initialForm);
  const dispatch = useAppDispatch();
  const handleChange = (key: keyof User, value: string) => {
    setForm({ ...form, [key]: value });
  };
  const handleSubmit = () => {
    // setForm(initialForm);
    dispatch(register(form));
  };
  return (
    <SafeAreaView style={s.authContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView>
          <View style={s.headerContainer}>
            <Text style={s.header}>Let's join Netflix!</Text>
            <Text style={s.headerDesc}>
              Make sure the email and phone number you enter are currently
              active.
            </Text>
          </View>
          <View style={s.formContainer}>
            <TextInput
              label={"Username"}
              mode="outlined"
              value={form.username}
              onChangeText={(text) => handleChange("username", text)}
              style={{ backgroundColor: "gray" }}
              activeOutlineColor="darkgray"
            />
            <TextInput
              label={"Email"}
              mode="outlined"
              value={form.email}
              onChangeText={(text) => handleChange("email", text)}
              keyboardType="email-address"
              style={{ backgroundColor: "gray" }}
              activeOutlineColor="darkgray"
            />
            <TextInput
              label={"Password"}
              mode="outlined"
              secureTextEntry
              value={form.password}
              onChangeText={(text) => handleChange("password", text)}
              style={{ backgroundColor: "gray" }}
              activeOutlineColor="darkgray"
            />
            <TextInput
              label={"Phone Number"}
              mode="outlined"
              value={form.phoneNumber}
              onChangeText={(text) => handleChange("phoneNumber", text)}
              keyboardType="number-pad"
              style={{ backgroundColor: "gray" }}
              activeOutlineColor="darkgray"
            />
            <TextInput
              label={"Address"}
              mode="outlined"
              value={form.address}
              onChangeText={(text) => handleChange("address", text)}
              style={{ backgroundColor: "gray" }}
              activeOutlineColor="darkgray"
            />
            <Button
              mode="contained"
              style={s.authButton}
              onPress={handleSubmit}
            >
              Sign Up
            </Button>
          </View>
          <View style={s.footer}>
            <Text style={s.footerDesc}>
              By registering, you agree to our{" "}
              <Text style={s.footerBold}>Terms of Service</Text> and{" "}
              <Text style={s.footerBold}>Privacy Policy.</Text>
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={s.footerDesc}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={{ justifyContent: "center" }}
              >
                <Text style={[s.footerBold, { fontSize: 16 }]}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default RegisterScreen;
