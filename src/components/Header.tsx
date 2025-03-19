import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {
  onAddPress?: () => void;
  onHeartPress?: () => void;
  onMessagePress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onAddPress,
  onHeartPress,
  onMessagePress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Instagram</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={onAddPress}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={onHeartPress}>
          <Ionicons name="heart-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={onMessagePress}>
          <Ionicons name="paper-plane-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: "#CDCDCD",
  },
  logoContainer: {
    flex: 1,
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 22,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 15,
  },
});

export default Header;
