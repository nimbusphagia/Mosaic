import { CommentRes } from "./comments";
import { MediaRes } from "./media";
import { ProfileLazy } from "./profile";

interface PostBase {
  publicId: string;
  slides: Slide[];
  title: string;
  description: string | null;
  author: ProfileLazy;
  createdAt: Date;
  private: boolean;
  views: number;
}

export interface Slide {
  publicId: string;
  media: MediaRes | null;
  position: number;
}
interface PostStats {
  comments: number;
  likes: number;
}

export interface PostLazy extends PostBase {
  stats: PostStats;
}
export interface PostRes extends PostBase {
  comments: CommentRes[];
  likes: number;
}

export interface RepostLazy {
  publicId: string;
  post: PostLazy;
}
export interface RepostRes {
  publicId: string;
  post: PostRes;
}
