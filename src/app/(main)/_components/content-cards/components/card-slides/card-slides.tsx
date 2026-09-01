import cardStyles from "../../content-cards.module.css"
import { Slide } from "@/_types/posts"
import SlideMd from "./slide-md"

type CardSlidesProps = {
  slides: Slide[],
}
export default function CardSlides({ slides }: CardSlidesProps) {
  return (
    <div className={cardStyles["slides-container"]}>
      {<SlideMd slide={slides[0]} />}
      {/*slides.map((s) => {
        return (
          <SlideMd
            key={s.publicId}
            slide={s} />
        )
      })*/}
    </div>
  )
}
