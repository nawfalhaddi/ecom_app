import React from "react";
import { View, Text } from "react-native";
import Toast from "react-native-toast-message";

const ToastComponent = () => {
  return <Toast ref={(ref) => Toast.setRef(ref)} />;
};

export default ToastComponent;
