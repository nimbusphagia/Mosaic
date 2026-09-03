import postStyles from "./post.module.css"
import { PostRes } from "@/_types/posts";
import { apiClient } from "@/_lib/api/api-client";
import ProfileAvatar from "../../_components/avatar/profile-avatar";
import CommentSection from "../_components/comment-section/comment-section";
import ReturnButton from "../../_components/navigation/return-button/return-button";
import ProfileCard from "../../_components/profile-card/profile-card";
import PostDetails from "../_components/post-details/post-details";
import { format } from "date-fns";
import SlideImg from "../../_components/slide-img/slide-img";
import { FollowStatus } from "@/_types/profile";
import FollowButton from "../../_components/follow-button/follow-button";

type PostPageProps = {
  params: Promise<{ postId: string }>
}
export default async function PostPage({ params }: PostPageProps) {
  const { postId } = await params;
  const post = await loadPost(postId);
  const followingStatus = await loadFollowingStatus(post.author.publicId);

  return (
    <div className={postStyles["body"]}>
      <header className={postStyles["header"]}>
        <div className={postStyles["header-navigation"]}>
          <ReturnButton />
          <h1>Post Title</h1>
        </div>

        <div className={postStyles["header-info"]}>
          {!followingStatus.isSelf &&
            <FollowButton
              profileId={post.author.publicId}
              isFollowing={followingStatus.following}
              currentPath={`/post/${postId}`}
            />
          }
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
              <SlideImg
                key={s.publicId}
                slide={s}
                imgFit="contain"
                wrapperClass="h-[90vh]"
              />
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
            currentPath={`post/${postId}`}
            followingStatus={followingStatus}
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
async function loadFollowingStatus(profileId: string): Promise<FollowStatus> {
  return apiClient<FollowStatus>(`/profiles/${profileId}/follow`, { auth: true, method: "GET" });
}

