import React from "react";
import { View, StyleSheet, TextInput, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useTheme } from "react-native-paper";
import SafeAreaWrapper from "../components/SafeAreaWrapper";
import { TabParamList } from "../types";

type ExploreScreenNavigationProp = BottomTabNavigationProp<
  TabParamList,
  "Explore"
>;

type Props = {
  navigation: ExploreScreenNavigationProp;
};

// Mock data for explore grid
interface ExploreItem {
  id: string;
}

const exploreData: ExploreItem[] = Array.from({ length: 30 }, (_, i) => ({
  id: i.toString(),
}));

const ExploreScreen: React.FC<Props> = () => {
  const { colors } = useTheme();
  const renderGridItem = ({
    item,
    index,
  }: {
    item: ExploreItem;
    index: number;
  }) => {
    const isLarge = index % 10 === 0;

    return <View style={[styles.gridItem, isLarge && styles.gridItemLarge]} />;
  };

  return (
    <SafeAreaWrapper>
      <View style={styles.searchBarContainer}>
        <View style={[styles.searchBar]}>
          <Ionicons
            name="search"
            size={18}
            color={colors.onBackground}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={colors.onBackground}
            style={styles.searchInput}
          />
        </View>
      </View>

      <FlatList
        data={exploreData}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    padding: 10,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "gray",
    borderRadius: 10,
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 8,
    opacity: 0.3,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  gridItem: {
    flex: 1 / 3,
    aspectRatio: 1,
    margin: 1,
    backgroundColor: "#CDCDCD",
  },
  gridItemLarge: {
    flex: 2 / 3,
    aspectRatio: 1,
  },
});

export default ExploreScreen;
