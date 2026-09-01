import { HomeFeedItem } from "@/_types/feed";
import PostCard from "./components/cards/post-card";
import RepostCard from "./components/cards/repost-card";
import CollectionCard from "./components/cards/collection-card";

type HomeItemProps = {
  item: HomeFeedItem;
}
export default function HomeItem({ item }: HomeItemProps) {
  switch (item.type) {
    case "POST":
      return <PostCard post={item.post} createdAt={item.createdAt} />
    case "REPOST":
      return <RepostCard post={item.post} reposter={item.reposter} createdAt={item.createdAt} />
    case "COLLECTION":
      return <CollectionCard collection={item.collection} createdAt={item.createdAt} />
    default: {
      const _exhaustive: never = item
      return null
    }
  }
}
