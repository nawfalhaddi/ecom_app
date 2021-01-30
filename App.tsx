import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { themeFonts, myTheme } from "./src/core/ecom-app-interface/theme";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";
import MainEntry from "./src/main-entry";

export default function App() {
  const [loaded] = useFonts(themeFonts);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={myTheme}>
      <View style={{ flex: 1 }}>
        <StatusBar style="light" />
        <MainEntry />
      </View>
    </ThemeProvider>
  );
}
