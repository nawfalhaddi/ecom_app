import { StackHeaderProps } from "@react-navigation/stack";
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const HomeHeader = ({ navigation }: StackHeaderProps) => {
  const theme = useContext(ThemeContext);
  const { t, i18n } = useTranslation("home");

  return (
    <HeaderContainer isRTL={i18n.dir()}>
      <LogoPicture source={require("../../assets/images/tradeling.png")} />

      <Bell
        isRTL={i18n.dir()}
        onPress={() => {}}
        name={"bell"}
        color={theme.colors.light_bg_color}
        size={25}
      />
    </HeaderContainer>
  );
};

export default HomeHeader;

const HeaderContainer = styled.View<{ isRTL: "ltr" | "rtl" }>`
  background-color: ${(props) => props.theme.colors.primary};
  height: 80px;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => (props.isRTL === "rtl" ? "row-reverse" : "row")};
  padding-top: 15px;
`;

const LogoPicture = styled.Image`
  height: 40px;
  width: 150px;
  border-color: ${(props) => props.theme.colors.light_bg_color};
  margin: 0px 10px;
`;
const Bell = styled(Feather)<{ isRTL: "ltr" | "rtl" }>`
  margin-right: ${(props) => (props.isRTL === "rtl" ? "0px" : "15px")};
  margin-left: ${(props) => (props.isRTL === "rtl" ? "15px" : "0px")};
`;
