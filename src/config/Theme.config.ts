import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    background: "#ffffff",
    onBackground: "#000000",
    primary: "#0095F6",
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    background: "#000000",
    onBackground: "#ffffff",
    primary: "#1E90FF",
  },
};
