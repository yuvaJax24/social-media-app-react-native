import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeLoginUserData = async (value: string) => {
  try {
    await AsyncStorage.setItem("user", value);
    console.log("Data stored successfully!");
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

export const getLoginUserData = async () => {
  try {
    const value = await AsyncStorage.getItem("user");
    return value;
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
};

export const removeLoginUserData = async (key: string) => {
  try {
    await AsyncStorage.removeItem("user");
    console.log(`Removed user successfully!`);
  } catch (error) {
    console.error("Error removing data:", error);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log("All data cleared!");
  } catch (error) {
    console.error("Error clearing storage:", error);
  }
};
