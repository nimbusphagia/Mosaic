import { AssetRes } from "./media";

export interface ProfileLazy {
  publicId: string;
  nickname: string;
  picture: AssetRes;
  createdAt: Date;
}
