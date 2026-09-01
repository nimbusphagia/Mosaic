import profileStyles from "../../profile.module.css"
import { CollectionLazy } from "@/_types/collections"
import { PostLazy, RepostLazy } from "@/_types/posts"
import GridItem from "./grid-item"

type ProfileMainProps = {
  posts: Omit<PostLazy, "author" | "description">[],
  reposts: RepostLazy[],
  collections: CollectionLazy[],
}

export default function ProfileMain({
  posts,
  reposts,
  collections
}: ProfileMainProps) {
  return (
    <main className={profileStyles.main}>
      <div className={profileStyles["main-grid"]}>
        {!posts.length ?
          <p>There are no posts.</p> :
          posts.map((p) => {
            return (
              <GridItem
                key={p.publicId}
                publicId={p.publicId}
                type="post"
                slides={p.slides}
                likes={p.stats.likes}
                comments={p.stats.comments}
              />
            )
          })
        }
      </div>
    </main>
  )
}
