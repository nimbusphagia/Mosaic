import { ProfileLazy } from "@/_types/profile"
import { AvatarImage } from "./avatar-image"
import { AvatarTitle } from "./avatar-title"

type ProfileAvatarProps = {
  profile: ProfileLazy,
  containerClass?: string,
}

export function ProfileAvatar({ profile, containerClass }: ProfileAvatarProps) {
  return (
    <div className={`w-full flex items-center gap-2 ${containerClass}`}>
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
