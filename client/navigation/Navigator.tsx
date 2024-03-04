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

import ProfileScreen from "../screens/BottomTabGroupScreens/ProfileScreen";
import {
  HomeStackParamList,
  RootStackParamList,
} from "../types/navigationTypes";
import SearchScreen from "../screens/HomeStackGroupScreens/SearchScreen";

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
  return (
    <NavigationContainer theme={DarkTheme}>
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
    </NavigationContainer>
  );
};

export default Navigator;
