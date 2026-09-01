import cardStyles from "../../content-cards.module.css"
import { PostLazy } from "@/_types/posts"
import CardHeader from "../card-header/card-header"
import CardSlides from "../card-slides/card-slides"

type PostCardProps = {
  post: PostLazy,
  createdAt: Date,
}
export default function PostCard({ post, createdAt }: PostCardProps) {
  return (
    <div className={cardStyles["item-card"]}>
      <CardHeader
        author={post.author}
        title="Post title"
        type="POST"
        createdAt={createdAt}
      />
      <CardSlides slides={post.slides} />
    </div>
  )
}
