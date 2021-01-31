import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";
import { Switch } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import styled, { ThemeContext } from "styled-components/native";
import * as Permissions from "expo-permissions";
const Settings = () => {
  const { t, i18n } = useTranslation("settings");
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const toggleNotificationsSwitch = () =>
    setIsNotificationsEnabled((previousState) => !previousState);

  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const toggleLocationSwitch = () =>
    setIsLocationEnabled((previousState) => !previousState);

  return (
    <MainContainer>
      <Title>{t("Grant_Access")}</Title>
      <ProfileItemButton
        isRTL={i18n.dir()}
        onPress={() => {
          //   Toast.show({
          //     type: "info",
          //     position: "bottom",
          //     text1: "Hello",
          //     text2: "This is some something 👋",
          //     visibilityTime: 3000,
          //     autoHide: true,
          //     topOffset: 30,
          //     bottomOffset: 40,
          //     onShow: () => {},
          //     onHide: () => {},
          //     onPress: () => {},
          //   });
          toggleNotificationsSwitch();
        }}
      >
        <ProfileItemText>{t("Notifications")}</ProfileItemText>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={toggleNotificationsSwitch}
        />
      </ProfileItemButton>
      <ProfileItemButton isRTL={i18n.dir()} onPress={toggleLocationSwitch}>
        <ProfileItemText>{t("Location")}</ProfileItemText>
        <Switch
          value={isLocationEnabled}
          onValueChange={toggleLocationSwitch}
        />
      </ProfileItemButton>
    </MainContainer>
  );
};

export default Settings;

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
  justify-content: space-between;
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.Semibold};
  font-size: 14px;
  color: #9b9b9b;
`;

const ProfileItemText = styled.Text`
  font-family: ${(props) => props.theme.fonts.Regular};
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
`;
