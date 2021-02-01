import React, { useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { ThemeContext } from "styled-components";
import styled from "../../theme/styled-components";

const Loader = () => {
  const theme = useContext(ThemeContext);
  return (
    <MainContainer>
      <ActivityIndicator size="large" color={theme.colors.secondary} />
    </MainContainer>
  );
};

export default Loader;

const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
