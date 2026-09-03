import { PostLazy, Slide } from "./posts";
import { ProfileLazy } from "./profile";

interface CollectionBase {
  publicId: string;
  title: string;
  description: string | null;
  createdAt: Date;
  owner: ProfileLazy;
  likes: number;
  private: boolean;
}

interface CollectionPost {
  publicId: string;
  position: number;
  post: PostLazy;
}

export interface CollectionLazy extends CollectionBase {
  slides: Slide[];
}

export interface CollectionRes extends CollectionBase {
  posts: CollectionPost[];
}
