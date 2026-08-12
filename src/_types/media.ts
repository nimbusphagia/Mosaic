// Media
export interface MediaLazy {
  publicId: string;
  resourceType: string;
  format: string;
  url: string;
  thumbnail: string;
  bytes: number;
  duration: number | null;
  createdAt: Date;
}
export interface MediaRes extends MediaLazy {
  cloudinaryId: string;
  cloudinaryAssetId: string;
  width: number | null;
  height: number | null;
}

// Asset
export type AssetType =
  | "DEFAULT_PROFILE_PICTURE"
  | "DEFAULT_PROFILE_BANNER"
  | "PROFILE_PICTURE"
  | "PROFILE_BANNER";

export interface AssetRes {
  publicId: string;
  type: AssetType;
  media: MediaRes | null;
}
