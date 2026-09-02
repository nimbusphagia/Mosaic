import cardStyles from "../../content-cards.module.css"
import { Slide } from "@/_types/posts"
import SlideImg from "../../../slide-img/slide-img"

type CardSlidesProps = {
  slides: Slide[],
}
export default function CardSlides({ slides }: CardSlidesProps) {
  return (
    <div className={cardStyles["slides-container"]}>
      {<SlideImg slide={slides[0]} />}
      {/*slides.map((s) => {
        return (
          <SlideImg
            key={s.publicId}
            slide={s} />
        )
      })*/}
    </div>
  )
}
