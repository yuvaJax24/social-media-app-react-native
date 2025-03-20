import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../components/Post";
import {
  Post as PostType,
  TabParamList,
  StackParamList,
  Story,
} from "../types";
import SafeAreaWrapper from "../components/SafeAreaWrapper";
import { StackNavigationProp } from "@react-navigation/stack";
import { CompositeNavigationProp } from "@react-navigation/native";
import { supabase } from "../config/Supabase.config";
import { getLoginUserData } from "../store/user.store";

type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Home">,
  StackNavigationProp<StackParamList, "IndividualProfile">
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

// Mock data for posts
const postsData: PostType[] = [
  {
    id: "1",
    username: "john_doe",
    userImage: null,
    postImage: null,
    likes: 125,
    caption: "Beautiful day at the beach! #summer #beach",
    commentsCount: 24,
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    username: "jane_smith",
    userImage: null,
    postImage: null,
    likes: 243,
    caption: "My new painting 🎨 #art #creative",
    commentsCount: 36,
    timestamp: "4 hours ago",
  },
  {
    id: "3",
    username: "travel_addict",
    userImage: null,
    postImage: null,
    likes: 532,
    caption:
      "Amazing views from Mt. Everest base camp! #travel #adventure #mountains",
    commentsCount: 76,
    timestamp: "6 hours ago",
  },
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [user, setUser] = useState({});

  const handleStoryPress = (story: Story) => {
    console.log("Story pressed:", story.username);
    // Navigate to story view screen (to be implemented)
  };

  const handleProfilePress = (username: string) => {
    console.log("Profile pressed:", username);
    // Navigate to user profile
    // navigation.navigate("Profile");
    navigation.navigate("IndividualProfile", { userId: 123 });
  };

  useEffect(() => {
    const loginUserDetail = getLoginUserData();

    const checkSession = async () => {
      const user = JSON.parse((await loginUserDetail) || "") || null;
      if (!user) {
        navigation.replace("Login"); // Redirect to login if no user
      } else {
        setUser(user);
      }
    };

    checkSession();
  }, []);

  return (
    <SafeAreaWrapper>
      <Header />
      <ScrollView>
        <Stories onStoryPress={handleStoryPress} />
        {postsData.map((post) => (
          <Post key={post.id} post={post} onProfilePress={handleProfilePress} />
        ))}
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
