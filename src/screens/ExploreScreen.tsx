import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
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
        <View style={styles.searchBar}>
          <Ionicons
            name="search"
            size={18}
            color="gray"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="gray"
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
    borderBottomWidth: 0.5,
    borderBottomColor: "#CDCDCD",
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    borderRadius: 12,
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
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
