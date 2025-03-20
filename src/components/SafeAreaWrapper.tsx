import React, { ReactNode } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type Props = { children: ReactNode; style?: ViewStyle | ViewStyle[] };
const SafeAreaWrapper: React.FC<Props> = ({ children, style }) => {
  const { colors } = useTheme();
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: colors.background },
          style,
        ]}
      >
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Default background color
  },
});

export default SafeAreaWrapper;
