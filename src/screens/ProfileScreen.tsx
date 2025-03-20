import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import SafeAreaWrapper from "../components/SafeAreaWrapper";

const ProfileScreen = () => {
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
        <Text style={{ color: colors.onBackground }}>ProfileScreen</Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default ProfileScreen;
