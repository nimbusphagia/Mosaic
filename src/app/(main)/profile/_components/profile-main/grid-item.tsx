"use client"
import { Slide } from "@/_types/posts"
import profileStyles from "../../profile.module.css"
import { Heart, MessageCircle } from "lucide-react"
import { useRouter } from "next/navigation"

type GridItemProps = {
  type: "post" | "repost" | "collection",
  publicId: string,
  slides: Slide[],
  likes: number,
  comments: number | null,
}
export default function GridItem({ publicId, type, slides, likes, comments }: GridItemProps) {
  const router = useRouter();
  const handleNavigation = () => {
    router.push(`/post/${publicId}`)
  }
  return (
    <div className={profileStyles["grid-item"]}>
      <div
        className={profileStyles["display"]}
        onClick={handleNavigation}
      >
        <img src={slides[0].media?.url} />
        <ul className={profileStyles["display-stats"]}>
          <li>
            <Heart />
            <p>{likes}</p>
          </li>
          {
            comments !== null &&
            <li>
              <MessageCircle />
              <p>{comments}</p>
            </li>
          }
        </ul>
      </div>
    </div>
  )
}
