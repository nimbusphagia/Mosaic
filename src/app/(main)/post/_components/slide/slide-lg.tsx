import postStyles from "../../[postId]/post.module.css"
import { Slide } from "@/_types/posts"

type SlideFullProps = {
  slide: Slide,
}
export default function SlideLg({ slide }: SlideFullProps) {

  return (
    <div className={postStyles["slide-lg"]}>
      <img
        className={postStyles["slide-image"]}
        src={slide.media?.url}
      />
    </div>
  )
}
