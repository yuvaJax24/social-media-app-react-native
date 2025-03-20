import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "react-native-paper";
import { Story } from "../types";

// Mock data for stories
const storiesData: Story[] = [
  { id: "1", username: "Your Story", image: null, isYou: true },
  { id: "2", username: "john_doe", image: null },
  { id: "3", username: "jane_smith", image: null },
  { id: "4", username: "robert_j", image: null },
  { id: "5", username: "emma_w", image: null },
  { id: "6", username: "michael_b", image: null },
];

interface StoryItemProps {
  username: string;
  isYou?: boolean;
  onPress?: () => void;
}

const StoryItem: React.FC<StoryItemProps> = ({ username, isYou, onPress }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity style={styles.storyItem} onPress={onPress}>
      <View style={[styles.storyRing, isYou && styles.yourStoryRing]}>
        <View style={styles.storyImage} />
      </View>
      <Text
        numberOfLines={1}
        style={[styles.username, { color: colors.onBackground }]}
      >
        {username}
      </Text>
    </TouchableOpacity>
  );
};

interface StoriesProps {
  stories?: Story[];
  onStoryPress?: (story: Story) => void;
}

const Stories: React.FC<StoriesProps> = ({
  stories = storiesData,
  onStoryPress,
}) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesContainer}
      >
        {stories.map((story) => (
          <StoryItem
            key={story.id}
            username={story.username}
            isYou={story.isYou}
            onPress={() => onStoryPress && onStoryPress(story)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderBottomWidth: 0.5,
    // borderBottomColor: "#CDCDCD",
  },
  storiesContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  storyItem: {
    alignItems: "center",
    marginRight: 15,
    width: 70,
  },
  storyRing: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#e95950",
    justifyContent: "center",
    alignItems: "center",
  },
  yourStoryRing: {
    borderColor: "#CDCDCD",
  },
  storyImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#CDCDCD",
  },
  username: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
});

export default Stories;
