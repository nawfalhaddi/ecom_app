import React, { useContext } from "react";
import { View, Text } from "react-native";
import styled, { ThemeContext } from "styled-components/native";

const MainEntry = () => {
  const context = useContext(ThemeContext);

  return (
    <View style={{ backgroundColor: `${context.colors.primary}` }}>
      <CustomText>Test</CustomText>
    </View>
  );
};

export default MainEntry;

const CustomText = styled.Text`
  font-family: ${(props) => props.theme.fonts.Black};
  font-size: 60px;
  color: ${(props) => props.theme.colors.secondary};
`;
