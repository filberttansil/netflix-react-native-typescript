import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import Home from "../screens/HomeStackGroupScreens/HomeScreen";
import MovieDetail from "../screens/HomeStackGroupScreens/MovieDetailScreen";
import Profile from "../screens/HomeStackGroupScreens/ProfileScreen";
import ComingSoonScreen from "../screens/BottomTabGroupScreens/ComingSoonScreen";
import DownloadsScreen from "../screens/BottomTabGroupScreens/DownloadsScreen";

const Stack = createNativeStackNavigator();
const HomeStackGroup = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="MovieDetailScreen" component={MovieDetail} />
    </Stack.Navigator>
  );
};
const Tab = createBottomTabNavigator();
const BottomTabGroup = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;
        //   if (route.name === "Home") {
        //     iconName = "home";
        //   }
        //   return <Ionicons name={iconName} size={size} color={color} />;
        // },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackGroup}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Coming Soon"
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
        name="My Netflix"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <BottomTabGroup />
    </NavigationContainer>
  );
};

export default Navigation;
