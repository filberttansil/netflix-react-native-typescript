import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeStackGroupScreens/HomeScreen";
import MovieDetailScreen from "../screens/HomeStackGroupScreens/MovieDetailScreen";

import ComingSoonScreen from "../screens/BottomTabGroupScreens/ComingSoonScreen";
import DownloadsScreen from "../screens/BottomTabGroupScreens/DownloadsScreen";

import ProfileScreen from "../screens/BottomTabGroupScreens/ProfileScreen";
import {
  AuthStackParamList,
  HomeStackParamList,
  RootStackParamList,
} from "../types/navigationTypes";
import SearchScreen from "../screens/HomeStackGroupScreens/SearchScreen";
import { useAppSelector } from "../hooks/hooks";
import RegisterScreen from "../screens/AuthStackGroupScreens/RegisterScreen";
import LoginScreen from "../screens/AuthStackGroupScreens/LoginScreen";
/**
 * AuthStackGroup
 */
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AuthStackGroup = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};
/**
 * HomeStackGroup
 */
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackGroup = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="MovieDetailScreen"
        component={MovieDetailScreen}
      />
      <HomeStack.Screen name="SearchScreen" component={SearchScreen} />
    </HomeStack.Navigator>
  );
};

/**
 * RootStack (BottomTab)
 */
const RootStack = createBottomTabNavigator<RootStackParamList>();
const Navigator = () => {
  const { authenticated } = useAppSelector((state) => state.auth);
  return (
    <NavigationContainer theme={DarkTheme}>
      {authenticated ? (
        <RootStack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen
            name="Home"
            component={HomeStackGroup}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="home" size={size} color={color} />
              ),
            }}
          />
          <RootStack.Screen
            name="ComingSoon"
            component={ComingSoonScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="video-library" size={size} color={color} />
              ),
            }}
          />
          <RootStack.Screen
            name="Downloads"
            component={DownloadsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="download" size={size} color={color} />
              ),
            }}
          />
          <RootStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="user" size={size} color={color} />
              ),
            }}
          />
        </RootStack.Navigator>
      ) : (
        <AuthStackGroup />
      )}
    </NavigationContainer>
  );
};

export default Navigator;
