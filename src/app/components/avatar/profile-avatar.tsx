import { ProfileLazy } from "@/_types/profile"
import { AvatarImage } from "./avatar-image"
import { AvatarTitle } from "./avatar-title"

type ProfileAvatarProps = {
  profile: ProfileLazy
}

export function ProfileAvatar({ profile }: ProfileAvatarProps) {
  return (
    <div>
      <AvatarImage
        src={profile.picture.media?.url ?? "/pfp_fallback.jpg"}
        alt={profile.nickname}
      />
      <AvatarTitle
        title={profile.nickname}
      />
    </div>
  )
}
