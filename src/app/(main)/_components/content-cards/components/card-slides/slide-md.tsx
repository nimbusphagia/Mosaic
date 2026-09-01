import cardStyles from "../../content-cards.module.css"
import { Slide } from "@/_types/posts"

type SlideFullProps = {
  slide: Slide,
}
export default function SlideMd({ slide }: SlideFullProps) {

  return (
    <div className={cardStyles["slide-md"]}>
      <img
        className={cardStyles["slide-image"]}
        src={slide.media?.url}
      />
    </div>
  )
}
