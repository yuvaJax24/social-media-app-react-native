import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, CameraType, CameraView } from "expo-camera";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useIsFocused } from "@react-navigation/native";
import SafeAreaWrapper from "../components/SafeAreaWrapper";
import { TabParamList } from "../types";

type CameraScreenNavigationProp = BottomTabNavigationProp<
  TabParamList,
  "Camera"
>;

type Props = {
  navigation: CameraScreenNavigationProp;
};

const CameraScreen: React.FC<Props> = () => {
  const isFocused = useIsFocused();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState<CameraType>("back");
  const [showBlur, setShowBlur] = useState(false); // Blur effect state
  const cameraRef = useRef<CameraView | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleFlipCamera = () => {
    setShowBlur(true); // Show blur effect
    setTimeout(() => {
      setCameraType((prevType) => (prevType === "back" ? "front" : "back"));
      setTimeout(() => setShowBlur(false), 400);
    }, 300); // Small delay for smoother transition
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log(photo);
        // Handle photo (e.g., navigate to edit screen or save)
      } catch (error) {
        console.log("Error taking picture:", error);
      }
    }
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.noAccessText}>No access to camera</Text>
      </View>
    );
  }

  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        {isFocused && (
          <CameraView ref={cameraRef} style={styles.camera} facing={cameraType}>
            {showBlur && (
              <BlurView
                intensity={50}
                style={StyleSheet.absoluteFillObject}
                tint="dark"
              />
            )}
          </CameraView>
        )}
        <View style={styles.controlsContainer}>
          <View style={styles.controls}>
            <TouchableOpacity
              style={styles.flipButton}
              onPress={handleFlipCamera}
            >
              <Ionicons name="camera-reverse-outline" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.captureButton}
              onPress={takePicture}
            >
              <View style={styles.captureOuter}>
                <View style={styles.captureInner} />
              </View>
            </TouchableOpacity>
            <View style={styles.flipButton} />
          </View>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  controlsContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  flipButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 25,
  },
  captureButton: {
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  captureOuter: {
    width: 65,
    height: 65,
    backgroundColor: "black",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  captureInner: {
    width: 62,
    height: 62,
    backgroundColor: "white",
    borderRadius: 35,
  },
  noAccessText: {
    color: "white",
    fontSize: 18,
  },
});

export default CameraScreen;
