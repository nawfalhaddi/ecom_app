import React, { useContext } from "react";
import { View } from "react-native";
import styled, { ThemeContext } from "styled-components/native";
import ToastComponent from "../core/ecom-app-interface/components/Toast";
import MainNavigation from "../core/ecom-app-navigation";

const MainEntry = () => {
  return (
    <>
      <MainNavigation />
      <ToastComponent />
    </>
  );
};

export default MainEntry;
