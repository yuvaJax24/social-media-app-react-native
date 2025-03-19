export interface Post {
  id: string;
  username: string;
  userImage: string | null;
  postImage: string | null;
  likes: number;
  caption: string;
  commentsCount: number;
  timestamp: string;
}

export interface Story {
  id: string;
  username: string;
  image: string | null;
  isYou?: boolean;
}

export type TabParamList = {
  Home: undefined;
  Explore: undefined;
  Camera: undefined;
  Activity: undefined;
  Profile: undefined;
};

export type StackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
  IndividualProfile: { userId?: number };
};
