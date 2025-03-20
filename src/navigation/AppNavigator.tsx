import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import TabNavigator from "./TabNavigation";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import IndividualProfileScreen from "../screens/IndividualProfileScreen";
import { StackParamList } from "../types";

const Stack = createStackNavigator<StackParamList>();

const RootStack: React.FC = () => {
  const { colors } = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.onBackground,
          headerBackImage: () => (
            <Ionicons
              name="close"
              style={{ paddingLeft: 10 }}
              size={24}
              color={colors.onBackground}
            />
          ),
          headerBackTitleStyle: { display: "none" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IndividualProfile"
          component={IndividualProfileScreen}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
