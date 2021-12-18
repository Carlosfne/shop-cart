import React from "react";
import { Button, Text, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";


import TabRoutes from "./tab.routes";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <stackRoutes.Navigator
      headerMode="float"
      initialRouteName="Main"
      screenOptions={{
        cardStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <stackRoutes.Screen
        name="Main"
        component={TabRoutes}
        options={{ headerShown: false }}
      />

     
    </stackRoutes.Navigator>
  );
};

export default AppRoutes;
