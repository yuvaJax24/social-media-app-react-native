import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import SafeAreaWrapper from "../components/SafeAreaWrapper";

const ActivityScreen = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaWrapper>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.background,
        }}
      >
        <Text
          style={{
            color: colors.onBackground,
          }}
        >
          ActivityScreen
        </Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default ActivityScreen;
