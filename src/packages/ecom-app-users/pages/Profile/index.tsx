import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import styled, { ThemeContext } from "styled-components/native";
import { useTranslation } from "react-i18next";
import { Feather, AntDesign, FontAwesome } from "@expo/vector-icons";
import UAE_Flag from "../../../../core/ecom-app-interface/assets/images/UAE_Flag.png";
import USA_Flag from "../../../../core/ecom-app-interface/assets/images/USA_Flag.png";
import { StackHeaderProps } from "@react-navigation/stack";
import Routes from "../../../../core/ecom-app-navigation/Routes";

const Profile = ({ navigation }: StackHeaderProps) => {
  const { t, i18n } = useTranslation("profile");
  const theme = useContext(ThemeContext);
  return (
    <MainContainer>
      <ProfileItemButton
        isRTL={i18n.dir()}
        onPress={() => {
          navigation.navigate(Routes.Shipping);
        }}
      >
        <FeatherIcon name="map-pin" size={30} color={theme.colors.secondary} />
        <ProfileItemText>{t("Shipping_Addresses")}</ProfileItemText>
      </ProfileItemButton>
      <ProfileItemButton
        isRTL={i18n.dir()}
        onPress={() => {
          navigation.navigate(Routes.Settings);
        }}
      >
        <FeatherIcon name="settings" size={30} color={theme.colors.secondary} />
        <ProfileItemText>{t("Settings")}</ProfileItemText>
      </ProfileItemButton>
      <ProfileItemButton
        isRTL={i18n.dir()}
        onPress={() => {
          if (i18n.language.includes("ar")) {
            i18n.changeLanguage("en-US");
          } else {
            i18n.changeLanguage("ar-AR");
          }
        }}
      >
        <Flag source={i18n.language.includes("ar") ? USA_Flag : UAE_Flag} />
        <ProfileItemText>
          {i18n.language.includes("ar") ? t("English") : t("Arabic")}
        </ProfileItemText>
      </ProfileItemButton>
    </MainContainer>
  );
};

export default Profile;

const MainContainer = styled.ScrollView`
  padding: 15px 15px;
`;

const ProfileItemButton = styled.TouchableOpacity<{ isRTL: "rtl" | "ltr" }>`
  flex-direction: ${(props) => (props.isRTL === "rtl" ? "row-reverse" : "row")};
  height: 56px;
  box-shadow: 0px 4px 24px #34283e14;
  align-items: center;
  padding: 0px 10px;
  border-radius: 8px;
  background-color: #fff;
  margin: 5px 0px;
`;

const ProfileItemText = styled.Text`
  font-family: ${(props) => props.theme.fonts.Semibold};
  font-size: 17px;
  color: ${(props) => props.theme.colors.primary};
`;

const FeatherIcon = styled(Feather)`
  margin: 0px 5px;
`;

const Flag = styled.Image`
  margin: 0px 5px;
  height: 22px;
  width: 44px;
`;
