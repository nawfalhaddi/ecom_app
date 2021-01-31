import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "react-native";
import { themeFonts, myTheme } from "./src/core/ecom-app-interface/theme";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";
import MainEntry from "./src/main-entry";
import "./src/core/ecom-app-i18n/i18n";
import { usePermissions } from "expo-permissions";
import * as Permissions from "expo-permissions";

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
