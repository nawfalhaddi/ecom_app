import React, { useContext } from "react";
import { View } from "react-native";
import styled, { ThemeContext } from "styled-components/native";
import MainNavigation from "../core/ecom-app-navigation";
import "../core/ecom-app-i18n/i18n";

const MainEntry = () => {
  return <MainNavigation />;
};

export default MainEntry;
