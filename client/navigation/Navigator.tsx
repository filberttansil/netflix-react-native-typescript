import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {
  DarkTheme,
  NavigationContainer,
  RouteProp,
} from "@react-navigation/native";

import HomeScreen from "../screens/HomeStackGroupScreens/HomeScreen";
import MovieDetailScreen from "../screens/HomeStackGroupScreens/MovieDetailScreen";

import ComingSoonScreen from "../screens/BottomTabGroupScreens/ComingSoonScreen";
import DownloadsScreen from "../screens/BottomTabGroupScreens/DownloadsScreen";
import { BottomTabParamList, HomeStackParamList } from "./navigation.types";
import ProfileScreen from "../screens/BottomTabGroupScreens/ProfileScreen";

/**
 * HomeStackGroup
 */
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackGroup = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="MovieDetail" component={MovieDetailScreen} />
    </HomeStack.Navigator>
  );
};

/**
 * BottomTabGroup
 */
const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabGroup = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeStackGroup"
        component={HomeStackGroup}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ComingSoon"
        component={ComingSoonScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="video-library" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={DownloadsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="download" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Navigator component
const Navigator = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <BottomTabGroup />
    </NavigationContainer>
  );
};

export default Navigator;
