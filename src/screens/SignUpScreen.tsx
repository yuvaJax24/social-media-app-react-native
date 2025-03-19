import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { StackParamList } from "../types";
import { useTheme } from "react-native-paper";

type SignupScreenNavigationProp = StackScreenProps<StackParamList, "Signup">;

const SignupScreen: React.FC<SignupScreenNavigationProp> = ({ navigation }) => {
  const { colors } = useTheme(); // Get theme colors]
  const [signUpdetail, setSignUpDetail] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSignup = async () => {};

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.onBackground }]}>
        Create Account
      </Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        placeholder="name"
        value={signUpdetail?.name}
        onChangeText={(name) => setSignUpDetail({ ...signUpdetail, name })}
        style={[
          styles.input,
          { color: colors.onBackground, borderColor: colors.primary },
        ]}
      />
      <TextInput
        placeholder="Email"
        value={signUpdetail?.email}
        onChangeText={(email) => setSignUpDetail({ ...signUpdetail, email })}
        style={[
          styles.input,
          { color: colors.onBackground, borderColor: colors.primary },
        ]}
      />
      <TextInput
        placeholder="Password"
        value={signUpdetail?.password}
        onChangeText={(password) =>
          setSignUpDetail({ ...signUpdetail, password })
        }
        secureTextEntry
        style={[
          styles.input,
          { color: colors.onBackground, borderColor: colors.primary },
        ]}
      />

      <TouchableOpacity
        onPress={handleSignup}
        style={styles.button}
        disabled={
          !signUpdetail?.name || !signUpdetail?.email || !signUpdetail?.password
        }
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={[styles.link, { marginTop: 16 }]}>
          Already have an account? Login
        </Text>
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

export default SignupScreen;
