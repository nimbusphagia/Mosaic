import { ProfileRes } from "@/_types/profile"
import profileStyles from "../../profile.module.css"
import AvatarImage from "@/app/(main)/_components/avatar/avatar-image"

type ProfileHeaderProps = {
  profile: ProfileRes,
}
export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className={profileStyles.hero}>
      <img
        className={profileStyles["hero-image"]}
        src={profile.banner.media!.url}
        alt="Hero Image"
      />
      <div className={profileStyles.overlay}>
        <div
          className={profileStyles["hero-card"]}>
          <header className={profileStyles.header}>
            <AvatarImage
              src={profile.picture.media!.url}
              alt="Profile picture"
              size="lg"
              containerClass={profileStyles["profile-picture"]}
            />
            <h2>
              {profile.nickname}
            </h2>
            <ul className={profileStyles["stats"]}>
              <li>
                <a>
                  Followers: {profile.followerCount}
                </a>
              </li>
              <li>
                <a>
                  Following: {profile.followingCount}
                </a>
              </li>
            </ul>
          </header>
          <div className={profileStyles["body"]}>
            <p>{profile.description}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
