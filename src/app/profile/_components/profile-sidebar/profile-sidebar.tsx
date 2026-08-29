import { MediaLazy } from "@/_types/media";
import { AvatarImage } from "@/app/_components/avatar/avatar-image"

type ProfileSidebarProps = {
  nickname: string;
  media: MediaLazy;
  description: string;
  followerCount: number;
  followingCount: number;
}
export default function ProfileSidebar({
  nickname,
  media,
  description,
  followerCount,
  followingCount
}: ProfileSidebarProps) {
  return (
    <aside>
      <header>
        <AvatarImage
          src={media.url}
          alt="Profile picture"
          size="lg"
        />
        <h2>
          {nickname}
        </h2>
        <ul>
          <li>
            <a>
              Followers: {followerCount}
            </a>
          </li>
          <li>
            <a>
              Following: {followingCount}
            </a>
          </li>
        </ul>
      </header>
      <div>
        <p>{description}</p>
      </div>
    </aside>
  )
}
