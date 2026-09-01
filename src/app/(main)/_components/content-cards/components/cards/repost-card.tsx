import { PostLazy, RepostLazy } from "@/_types/posts"
import { ProfileLazy } from "@/_types/profile"

type RepostCardProps = {
  reposter: ProfileLazy,
  post: PostLazy,
  createdAt: Date,
}
export default function RepostCard({ reposter, post, createdAt }: RepostCardProps) {
  return (
    <div>

    </div>
  )
}
