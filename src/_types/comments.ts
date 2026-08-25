import { ProfileLazy } from "./profile";

export interface CommentRes {
  publicId: string;
  author: ProfileLazy;
  text: string;
  createdAt: Date;
  likes: number;
}
