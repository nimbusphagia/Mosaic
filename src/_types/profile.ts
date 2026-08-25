import { CollectionLazy } from "./collections";
import { AssetRes } from "./media";
import { PostLazy, RepostLazy } from "./posts";
import { PublicItem } from "./utils";

export interface ProfileLazy {
  publicId: string;
  nickname: string;
  picture: AssetRes;
  createdAt: Date;
}

export interface ProfileRes extends ProfileLazy {
  description: string;
  banner: AssetRes;
  followerCount: number;
  followingCount: number;
  blocking: PublicItem[];
  blockedBy: PublicItem[];
  posts: Omit<PostLazy, "author" | "description">[];
  reposts: RepostLazy[];
  collections: CollectionLazy[];
}
