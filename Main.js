import { Provider as PaperProvider } from "react-native-paper";
import * as React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./App";
import store from "./store";

const theme = {
    dark: {
      bgDark: "#0d1f2d",
      txtOneDark: "#ffffff",
      txtTwoDark: "#afffff",
      btnOneDark: "#0d6e6e",
      btnTwoDark: "#1d2e3d",
    },
    light: {
      bgLight: "#FFFEFB",
      txtOneLight: "#3B3C3D",
      btnOneLight: "#00668C",
      btnTwoLight: "#71C4EF",
      cardLightPass: "#E0E0E0",
    },
  };

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
