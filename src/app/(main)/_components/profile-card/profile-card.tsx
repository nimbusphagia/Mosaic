"use client"
import { ProfileLazy } from "@/_types/profile"
import cardStyles from "./profile-card.module.css"
import AvatarImage from "../avatar/avatar-image"
import { useRouter } from "next/navigation"

type ProfileCardProps = {
  profile: ProfileLazy,
  containerClass?: string,
}
export default function ProfileCard({ profile, containerClass }: ProfileCardProps) {
  const router = useRouter();
  const handleRedirect = () => {
    router.push(`/profile/${profile.publicId}`)
  }
  return (
    <div
      className={`${cardStyles["card"]} ${containerClass}`}>
      <header
        className={cardStyles["header"]}
        onClick={handleRedirect}
      >
        <AvatarImage
          src={profile.picture.media!.url}
          alt="Profile picture"
          size="lg"
          containerClass={cardStyles["header-picture"]}
        />
        <h2 className={cardStyles["header-title"]}>
          {profile.nickname}
        </h2>
      </header>
      <div className={cardStyles["body"]}>
        <div className={cardStyles["actions"]}>
          <button>Follow</button>
          <button>Message</button>

        </div>
      </div>
    </div>

  )
}
