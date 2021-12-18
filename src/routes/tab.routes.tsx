import React, { useState, useEffect } from "react";
import { Keyboard } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

import { Home } from "../pages/Home";
import { SearchProduct } from "../pages/SearchProduct";

import { theme } from "../styles/colors";

import { useProduct } from "../contexts/ProductContext";

const Tab = createBottomTabNavigator();


const BottomRoutes: React.FC = () => {
  const { modalIsActive } = useProduct();
  const [hideTabBar, setHideTabBar] = useState(false);

  const [keyboardStatus, setKeyboardStatus] = useState("");
  const _keyboardDidShow = () => setKeyboardStatus("Keyboard Shown");
  const _keyboardDidHide = () => setKeyboardStatus("Keyboard Hidden");

  //keyboard hides navbar
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  useEffect(() => {
    setHideTabBar(modalIsActive);
  }, [modalIsActive]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.bottomTab.activeTintColor,
        inactiveTintColor: theme.colors.bottomTab.inactiveTintColor,
        showLabel: false,
        style: {
          width: '100%',
          height: 70,
          backgroundColor: theme.colors.bottomTab.background,
          position: 'absolute',
          bottom: keyboardStatus === "Keyboard Shown" || hideTabBar ? -120 : 0,
          elevation: 0,
          padding: 5
        },
      }}
    >

      <Tab.Screen
        name="Adicionar"
        component={SearchProduct}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={30} color={color} />
            // <Feather name="plus" color="#FFF" size={30} />
            ),
          }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" size={30} color={color} />
            ),
          }}
        />
    </Tab.Navigator>
  );
};

export default BottomRoutes;
