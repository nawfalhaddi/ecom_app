import { StackHeaderProps } from "@react-navigation/stack";
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const ProfileHeader = ({ navigation }: StackHeaderProps) => {
  const theme = useContext(ThemeContext);
  const { t, i18n } = useTranslation("profileHeader");

  return (
    <HeaderContainer isRTL={i18n.dir()}>
      <ProfilePicture source={require("../../assets/images/linkedin.png")} />
      <NameAndPhoneContainer>
        <ProfileName>{t("name")}</ProfileName>
        <ProfilePhone isRTL={i18n.dir()}>+212 682 97 14 74</ProfilePhone>
      </NameAndPhoneContainer>
      <EditButton onPress={() => console.log("Edit")}>
        <Feather name={"edit-2"} color={theme.colors.primary} size={20} />
      </EditButton>
    </HeaderContainer>
  );
};

export default ProfileHeader;

const HeaderContainer = styled.View<{ isRTL: "ltr" | "rtl" }>`
  background-color: ${(props) => props.theme.colors.primary};
  height: 150px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: ${(props) => (props.isRTL === "rtl" ? "row-reverse" : "row")};
`;

const ProfilePicture = styled.Image`
  height: 70px;
  width: 70px;
  border-width: 2px;
  border-radius: 100px;
  border-color: ${(props) => props.theme.colors.light_bg_color};
  margin: 0px 10px;
`;

const NameAndPhoneContainer = styled.View`
  flex: 1;
  height: 70px;
  justify-content: center;
`;
const ProfileName = styled.Text`
  font-family: ${(props) => props.theme.fonts.Bold};
  font-size: 19px;
  color: ${(props) => props.theme.colors.light_bg_color};
`;

const ProfilePhone = styled.Text<{ isRTL: "rtl" | "ltr" }>`
  font-family: ${(props) => props.theme.fonts.Regular};
  font-size: 14px;
  color: ${(props) => props.theme.colors.light_bg_color};
  text-align: ${(props) => (props.isRTL === "rtl" ? "right" : "left")};
`;

const EditButton = styled.TouchableOpacity`
  background-color: white;
  height: 48px;
  width: 48px;
  border-radius: 48px;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`;
