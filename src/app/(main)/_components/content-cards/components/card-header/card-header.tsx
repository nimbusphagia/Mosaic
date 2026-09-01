import cardStyles from "../../content-cards.module.css"
import { HomeFeedItem, HomeItemType } from "@/_types/feed"
import { formatDistanceToNow } from "date-fns"
import ProfileAvatar from "../../../avatar/profile-avatar"
import { ProfileLazy } from "@/_types/profile"

type CardHeaderProps = {
  title: string,
  type: HomeItemType,
  createdAt: Date,
  author: ProfileLazy,
}
export default function CardHeader({ title, author, type, createdAt }: CardHeaderProps) {
  return (
    <header className={cardStyles["item-header"]}>
      <div className={cardStyles["item-title"]}>
        <h3>{title}</h3>
        <p>{formatDistanceToNow(createdAt, { addSuffix: true })}</p>
      </div>
      <ProfileAvatar
        profile={author}
        redirect={true}
      />
    </header>
  )
}
