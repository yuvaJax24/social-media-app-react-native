import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { useTheme } from "react-native-paper";
import { StackParamList } from "../types";

type LoginScreenNavigationProp = StackScreenProps<StackParamList, "Login">;

const LoginScreen: React.FC<LoginScreenNavigationProp> = ({ navigation }) => {
  const { colors } = useTheme(); // Get theme colors]
  const [logIndetail, setLogIndetail] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = async () => {
    navigation.navigate("Home");
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.onBackground }]}>
        Instagram Login
      </Text>

      {error ? (
        <Text style={[styles.error, { color: "red" }]}>{error}</Text>
      ) : null}

      <TextInput
        placeholder="Email"
        value={logIndetail?.email}
        onChangeText={(email) => setLogIndetail({ ...logIndetail, email })}
        style={[
          styles.input,
          { color: colors.onBackground, borderColor: colors.primary },
        ]}
      />

      <TextInput
        placeholder="Password"
        value={logIndetail?.password}
        onChangeText={(password) =>
          setLogIndetail({ ...logIndetail, password })
        }
        secureTextEntry
        style={[
          styles.input,
          { color: colors.onBackground, borderColor: colors.primary },
        ]}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={[styles.button, { backgroundColor: colors.primary }]}
        disabled={!logIndetail?.email || !logIndetail?.password}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={[styles.link, { marginTop: 16 }]}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0095F6",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  error: { color: "red", marginBottom: 10 },
  link: { color: "#0095F6", marginTop: 10 },
});

export default LoginScreen;
