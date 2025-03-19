import React from "react";
import { Text, View } from "react-native";
import SafeAreaWrapper from "../components/SafeAreaWrapper";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../types";

type IndividualProfileScreenNavigationProp = StackScreenProps<
  StackParamList,
  "IndividualProfile"
>;

const IndividualProfileScreen: React.FC<
  IndividualProfileScreenNavigationProp
> = ({ route }) => {
  const { userId } = route.params || {};
  return (
    <SafeAreaWrapper>
      <View>
        <Text>IndividualProfileScreen {userId || ""}</Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default IndividualProfileScreen;
