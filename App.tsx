import { PaperProvider } from "react-native-paper";
import { useColorScheme } from "react-native";
import RootStack from "./src/navigation/AppNavigator";
import { darkTheme, lightTheme } from "./src/config/Theme.config";

export default function App() {
  const scheme = useColorScheme();
  console.log("first1", scheme);
  const theme = scheme === "dark" ? darkTheme : lightTheme;
  return (
    <PaperProvider theme={theme}>
      <RootStack />
    </PaperProvider>
  );
}
