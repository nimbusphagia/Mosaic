import postStyles from "./post.module.css"
import { PostRes } from "@/_types/posts";
import { apiClient } from "@/_lib/api/api-client";
import ProfileAvatar from "../../_components/avatar/profile-avatar";
import SlideLg from "../_components/slide/slide-lg"
import CommentSection from "../_components/comment-section/comment-section";
import ReturnButton from "../../_components/navigation/return-button/return-button";
import ProfileCard from "../../_components/profile-card/profile-card";
import PostDetails from "../_components/post-details/post-details";
import { format } from "date-fns";

type PostPageProps = {
  params: Promise<{ postId: string }>
}
export default async function PostPage({ params }: PostPageProps) {
  const { postId } = await params;
  const post = await loadPost(postId);


  return (
    <div className={postStyles["body"]}>
      <header className={postStyles["header"]}>
        <div className={postStyles["header-navigation"]}>
          <ReturnButton />
          <h1>Post Title</h1>
        </div>

        <div className={postStyles["header-info"]}>
          <button>Follow</button>
          <ProfileAvatar
            profile={post.author}
            redirect={true}
          />
        </div>
      </header>
      <main className={postStyles["display"]}>
        <div className={postStyles["slides-container"]}>
          {post.slides.map((s) => {
            return (
              <SlideLg
                key={s.publicId}
                slide={s} />
            )
          })}
        </div>
      </main>
      <div className={postStyles["bottom-section"]}>
        <div className={postStyles["details-section"]}>
          <PostDetails
            title={"Post Title"}
            description={post.description ?? ""}
            createdAt={format(post.createdAt, "MMM do, yyyy")}
          />

          <ProfileCard
            profile={post.author}
          />

        </div>
        <CommentSection
          containerClass={postStyles["comments-section"]}
          postId={post.publicId}
          comments={post.comments}
        />
      </div>
    </div>
  )
}
async function loadPost(postId: string): Promise<PostRes> {
  const post = await apiClient<PostRes>(
    `/posts/${postId}`, { auth: true })
  return post;
}


