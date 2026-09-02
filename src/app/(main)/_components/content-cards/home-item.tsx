import cardStyle from "./content-cards.module.css"
import { HomeFeedItem } from "@/_types/feed";
import CardHeader from "./components/card-header/card-header";
import CardSlides from "./components/card-slides/card-slides";

type HomeItemProps = {
  item: HomeFeedItem,
}
export default function HomeItem({ item }: HomeItemProps) {
  const isCollection = item.type === "COLLECTION";
  return (
    <div className={cardStyle["item-card"]}>
      <CardHeader
        author={isCollection ? item.collection.owner : item.post.author}
        title="Item title"
        type={item.type}
        createdAt={item.createdAt}
      />
      <CardSlides slides={isCollection ? item.collection.slides : item.post.slides} />
    </div>
  )

}
