import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import Routes from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    'InterLight': require("./assets/fonts/Inter-Light.ttf"),
    'InterRegular': require("./assets/fonts/Inter-Regular.ttf"),
    'InterMedium': require("./assets/fonts/Inter-Medium.ttf"),
    'InterSemiBold': require("./assets/fonts/Inter-SemiBold.ttf"),
    'InterBold': require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } 
   
  return <Routes />;
}