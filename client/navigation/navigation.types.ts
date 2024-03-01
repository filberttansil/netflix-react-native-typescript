import { RouteProp } from "@react-navigation/native";

// Define types for Navigation params
export type HomeStackParamList = {
  Home: undefined;
  MovieDetail: {
    id: number;
  };
};

// Define RouteProp for MovieDetail screen
export type MovieDetailProp = RouteProp<HomeStackParamList, "MovieDetail">;

export type BottomTabParamList = {
  HomeStackGroup: HomeStackParamList;
  ComingSoon: undefined;
  Downloads: undefined;
  Profile: undefined;
};
