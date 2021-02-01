import React from "react";
import { View, Text } from "react-native";
import styled from "../../theme/styled-components";

const EmptyScreen = () => {
  return (
    <MainContainer>
      <Text>There's no element to show for this moment</Text>
    </MainContainer>
  );
};

export default EmptyScreen;

const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
