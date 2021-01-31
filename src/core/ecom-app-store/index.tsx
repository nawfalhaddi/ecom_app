import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

import React from "react";
import { View, Text } from "react-native";

const ReduxStore = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxStore;
