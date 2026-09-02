import { HomeFeedItem } from "@/_types/feed";
import homeStyles from "./home.module.css"
import { apiClient } from "@/_lib/api/api-client";
import HomeItem from "../_components/content-cards/home-item";

export default async function HomePage() {
  const homeItems = await loadHome();
  return (
    <div className={homeStyles.body}>
      <main className={homeStyles["main"]}>
        {homeItems.map((i) => {
          const isCollection = i.type === "COLLECTION";
          return (
            <HomeItem
              key={isCollection ? i.collection.publicId : i.post.publicId}
              item={i} />
          )
        })}
      </main>
      <div className={homeStyles["recommendations"]}>

      </div>
    </div>
  )
}

async function loadHome(): Promise<HomeFeedItem[]> {
  const home = await apiClient<HomeFeedItem[]>(
    `/feed/home`, { auth: true })
  return home;
}
