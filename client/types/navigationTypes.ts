import { NavigatorScreenParams } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

// Define types for Navigation params

export type HomeStackParamList = {
  HomeScreen: undefined;
  MovieDetailScreen: {
    slug: string;
  };
};
export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  ComingSoon: undefined;
  Downloads: undefined;
  Profile: undefined;
};
