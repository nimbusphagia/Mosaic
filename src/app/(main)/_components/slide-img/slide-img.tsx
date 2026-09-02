import style from "./slide-img.module.css"
import { Slide } from "@/_types/posts"

type SlideImgProps = {
  slide: Slide,
  imgFit?: "cover" | "contain",
  wrapperClass?: string,
  imgClass?: string,
}
export default function SlideImg({ slide, imgFit = "contain", wrapperClass = "", imgClass = "" }: SlideImgProps) {
  const objectFit = "object-" + imgFit;

  return (
    <div className={`${style["wrapper"]} ${wrapperClass}`}>
      <img
        className={`${style["image"]} ${objectFit} ${imgClass}`}
        src={slide.media?.url}
      />
    </div>
  )
}
