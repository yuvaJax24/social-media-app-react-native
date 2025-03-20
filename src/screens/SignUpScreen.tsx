import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useTheme } from "react-native-paper";
import { StackParamList } from "../types";
import { supabase } from "../config/Supabase.config";

type SignupScreenNavigationProp = StackScreenProps<StackParamList, "Signup">;

const SignupScreen: React.FC<SignupScreenNavigationProp> = ({ navigation }) => {
  const { colors } = useTheme(); // Get theme colors]
  const [signupDetail, setSignupDetail] = useState({
    email: "",
    password: "",
    display_name: "",
  });
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp(signupDetail);

    if (error) {
      setMessage(error.message);
    }

    if (data?.user) {
      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: data?.user?.id,
          display_name: signupDetail?.display_name,
          email: signupDetail?.email,
        },
      ]);

      if (profileError) {
        console.error("Profile Save Error:", profileError.message);
        setMessage(profileError.message);
      } else {
        navigation.navigate("Login");
      }
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.onBackground }]}>
        Create Account
      </Text>

      {message ? <Text style={styles.error}>{message}</Text> : null}

      <TextInput
        placeholder="name"
        value={signupDetail?.display_name}
        onChangeText={(display_name) =>
          setSignupDetail({ ...signupDetail, display_name })
        }
        style={[
          styles.input,
          { color: colors.onBackground, borderColor: colors.primary },
        ]}
      />
      <TextInput
        placeholder="Email"
        value={signupDetail?.email}
        onChangeText={(email) => setSignupDetail({ ...signupDetail, email })}
        style={[
          styles.input,
          { color: colors.onBackground, borderColor: colors.primary },
        ]}
      />
      <TextInput
        placeholder="Password"
        value={signupDetail?.password}
        onChangeText={(password) =>
          setSignupDetail({ ...signupDetail, password })
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
          !signupDetail?.display_name ||
          !signupDetail?.email ||
          !signupDetail?.password
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
