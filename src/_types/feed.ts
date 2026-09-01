import { CollectionLazy } from "./collections";
import { PostLazy } from "./posts";
import { ProfileLazy } from "./profile";

// Home
interface FeedPost {
  type: "POST";
  createdAt: Date;
  post: PostLazy;
}
interface FeedRepost {
  type: "REPOST";
  createdAt: Date;
  reposter: ProfileLazy;
  post: PostLazy;
}
interface FeedCollection {
  type: "COLLECTION";
  createdAt: Date;
  collection: CollectionLazy;
}
export type HomeItemType = "POST" | "REPOST" | "COLLECTION";
export type HomeFeedItem = FeedPost | FeedRepost | FeedCollection;

// Explore
interface ExplorePost {
  type: "POST";
  post: PostLazy;
  convergence: number;
}
interface ExploreCollection {
  type: "COLLECTION";
  collection: CollectionLazy;
  convergence: number;
}
export type ExploreItem = ExplorePost | ExploreCollection;
