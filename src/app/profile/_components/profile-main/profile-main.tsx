import { CollectionLazy } from "@/_types/collections"
import { PostLazy, RepostLazy } from "@/_types/posts"

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
    <div>

    </div>
  )
}
