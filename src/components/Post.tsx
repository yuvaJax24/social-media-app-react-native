import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Post as PostType } from "../types";

interface PostProps {
  post: PostType;
  onLikePress?: (post: PostType) => void;
  onCommentPress?: (post: PostType) => void;
  onSharePress?: (post: PostType) => void;
  onProfilePress?: (username: string) => void;
}

const Post: React.FC<PostProps> = ({
  post,
  onLikePress,
  onCommentPress,
  onSharePress,
  onProfilePress,
}) => {
  const [liked, setLiked] = useState(false);

  const handleLikePress = () => {
    setLiked(!liked);
    onLikePress && onLikePress(post);
  };

  return (
    <View style={styles.container}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        <TouchableOpacity
          style={styles.userInfo}
          onPress={() => onProfilePress && onProfilePress(post.username)}
        >
          <View style={styles.userAvatar} />
          <Text style={styles.username}>{post.username}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Post Image */}
      <View style={styles.postImageContainer}>
        <View style={styles.postImage} />
      </View>

      {/* Post Actions */}
      <View style={styles.actionsContainer}>
        <View style={styles.leftActions}>
          <TouchableOpacity
            onPress={handleLikePress}
            style={styles.actionButton}
          >
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={24}
              color={liked ? "red" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => onCommentPress && onCommentPress(post)}
          >
            <Ionicons name="chatbubble-outline" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => onSharePress && onSharePress(post)}
          >
            <Ionicons name="paper-plane-outline" size={22} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={22} color="black" />
        </TouchableOpacity>
      </View>

      {/* Likes */}
      <View style={styles.likesContainer}>
        <Text style={styles.likesText}>
          {liked ? post.likes + 1 : post.likes} likes
        </Text>
      </View>

      {/* Caption */}
      <View style={styles.captionContainer}>
        <Text style={styles.caption}>
          <Text
            style={styles.username}
            onPress={() => onProfilePress && onProfilePress(post.username)}
          >
            {post.username}
          </Text>{" "}
          {post.caption}
        </Text>
      </View>

      {/* Comments */}
      <TouchableOpacity
        style={styles.commentsContainer}
        onPress={() => onCommentPress && onCommentPress(post)}
      >
        <Text style={styles.viewAllComments}>
          View all {post.commentsCount} comments
        </Text>
      </TouchableOpacity>

      {/* Timestamp */}
      <View style={styles.timestampContainer}>
        <Text style={styles.timestamp}>{post.timestamp}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#CDCDCD",
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
  },
  postImageContainer: {
    width: "100%",
    height: 400,
  },
  postImage: {
    flex: 1,
    backgroundColor: "#EAEAEA",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  leftActions: {
    flexDirection: "row",
  },
  actionButton: {
    marginRight: 15,
  },
  likesContainer: {
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  likesText: {
    fontWeight: "bold",
  },
  captionContainer: {
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  caption: {
    lineHeight: 18,
  },
  commentsContainer: {
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  viewAllComments: {
    color: "gray",
  },
  timestampContainer: {
    paddingHorizontal: 10,
  },
  timestamp: {
    fontSize: 11,
    color: "gray",
    marginBottom: 10,
  },
});

export default Post;
