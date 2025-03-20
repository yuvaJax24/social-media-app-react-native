import React from "react";
import { Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { useTheme } from "react-native-paper";
import SafeAreaWrapper from "../components/SafeAreaWrapper";
import { StackParamList } from "../types";

type IndividualProfileScreenNavigationProp = StackScreenProps<
  StackParamList,
  "IndividualProfile"
>;

const IndividualProfileScreen: React.FC<
  IndividualProfileScreenNavigationProp
> = ({ route }) => {
  const { colors } = useTheme();
  const { userId } = route.params || {};
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
        <Text style={{ color: colors.onBackground }}>
          IndividualProfileScreen {userId || ""}
        </Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default IndividualProfileScreen;
