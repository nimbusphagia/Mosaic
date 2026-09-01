"use client"
import { ProfileLazy } from "@/_types/profile"
import AvatarImage from "./avatar-image"
import AvatarTitle from "./avatar-title"
import { useRouter } from "next/navigation"

type ProfileAvatarProps = {
  profile: ProfileLazy,
  containerClass?: string,
  redirect?: boolean,
}

export default function ProfileAvatar({ profile, redirect, containerClass }: ProfileAvatarProps) {
  const router = useRouter();
  const handleRedirect = () => {
    if (!redirect) return;
    router.push(`/profile/${profile.publicId}`)
  }
  return (
    <div
      className={`flex items-center gap-2 ${containerClass}`}
      onClick={handleRedirect}
    >
      <AvatarImage
        src={profile.picture.media?.url ?? "/pfp_fallback.jpg"}
        alt={profile.nickname}
      />
      <AvatarTitle
        title={profile.nickname}
        className="h-fit"
      />
    </div>
  )
}
