import { FollowStatus, ProfileLazy } from "@/_types/profile"
import cardStyle from "./profile-card.module.css"
import AvatarImage from "../avatar/avatar-image"
import FollowButton from "../follow-button/follow-button"
import Link from "next/link"
import { apiClient } from "@/_lib/api/api-client"

type ProfileCardProps = {
  profile: ProfileLazy,
  currentPath: string,
  followingStatus: FollowStatus,
  containerClass?: string,
}
export default async function ProfileCard({ profile, followingStatus, currentPath, containerClass }: ProfileCardProps) {
  const profileUrl = `/profile/${profile.publicId}`;

  return (
    <div
      className={`${cardStyle["card"]} ${containerClass}`}>
      <header
        className={cardStyle["header"]}
      >
        <AvatarImage
          src={profile.picture.media!.url}
          alt="Profile picture"
          size="lg"
          containerClass={cardStyle["header-picture"]}
        />
        <Link
          href={profileUrl}
          className={cardStyle["link-wrapper"]}
        >
          <h2 className={cardStyle["header-title"]}>
            {profile.nickname}
          </h2>
        </Link>
      </header>
      <div className={cardStyle["body"]}>
        {
          !followingStatus.isSelf &&
          <div className={cardStyle["actions"]}>
            <FollowButton
              profileId={profile.publicId}
              isFollowing={followingStatus.following}
              currentPath={currentPath}
            />
            <button>Message</button>

          </div>

        }
      </div>
    </div>

  )
}

