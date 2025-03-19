import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import CameraScreen from "../screens/CameraScreen";
import ActivityScreen from "../screens/ActivityScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { TabParamList } from "../types";

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;
          let iconSize = size;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Explore") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Camera") {
            iconName = focused ? "add-circle" : "add-circle-outline";
            iconSize = 30; // Make the camera icon slightly bigger
          } else if (route.name === "Activity") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Profile") {
            // Instead of an icon, return a small profile image for Profile tab
            return (
              <View
                style={{
                  borderWidth: focused ? 1 : 0,
                  borderColor: "black",
                  borderRadius: 15,
                  padding: 1,
                }}
              >
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    backgroundColor: "#CDCDCD",
                  }}
                />
              </View>
            );
          } else {
            iconName = "ellipsis-horizontal";
          }

          return iconName ? (
            <Ionicons name={iconName as any} size={iconSize} color={color} />
          ) : null;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0.5,
          borderTopColor: "#CDCDCD",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
