import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert } from "react-native";
import styled from "styled-components/native";
import MapView from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
const Shipping = () => {
  const { t } = useTranslation("shipping");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <MainContainer>
      <AddButton onPress={() => setModalVisible(true)}>
        <AddButtonText>{t("Add_new_address")}</AddButtonText>
      </AddButton>
      <AddressModalContainer
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <AddressModal>
          <ModalTitle>{t("Add_new_address")}</ModalTitle>
          <AddressInput multiline placeholder={"Tap new address"} />
          <MapView style={{ width: 300, height: 300, marginTop: 10 }} />
          <Ionicons
            onPress={() => setModalVisible(false)}
            name="arrow-down-circle-outline"
            size={30}
            color={"black"}
          />
        </AddressModal>
      </AddressModalContainer>
    </MainContainer>
  );
};

export default Shipping;

const MainContainer = styled.ScrollView`
  flex: 1;
  padding: 0px 10px;
`;

const AddButton = styled.TouchableOpacity`
  height: 56px;
  background: ${(props) => props.theme.colors.secondary};
  box-shadow: 0px 4px 24px #34283e14;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`;

const AddButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.Semibold};
  font-size: 20px;
  color: #fff;
`;

const AddressModalContainer = styled.Modal``;

const AddressModal = styled.View`
  background-color: ${(props) => props.theme.colors.light_bg_color};
  margin: 10px 10px;
  border-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  align-self: center;
  flex: 1;
  width: 95%;
  padding: 0px 20px;
  flex-direction: column;
  align-items: center;
`;

const ModalTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.Bold};
  font-size: 20px;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin: 10px 0px;
  height: 30px;
`;

const AddressInput = styled.TextInput`
  font-family: ${(props) => props.theme.fonts.Regular};
  color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  height: 100px;
  border-width: 2px;
  width: 100%;
`;
