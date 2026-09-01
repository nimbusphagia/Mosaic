import { CommentRes } from "@/_types/comments"
import commentStyles from "./comments.module.css"
import CommentForm from "./components/comment-input"
import CommentComponent from "./components/comment"

type CommentSectionProps = {
  postId: string,
  comments: CommentRes[]
  containerClass?: string,
}
export default function CommentSection({ postId, comments, containerClass = "" }: CommentSectionProps) {
  return (
    <div className={`${commentStyles.body} ${containerClass}`}>
      <header className={commentStyles.header}>
        <h3>Comments</h3>
      </header>
      <div className={commentStyles["comments-container"]}>
        <CommentForm
          postId={postId}
        />
        {comments.map((c) => {
          return (
            <CommentComponent
              key={c.publicId}
              comment={c} />
          )
        })}
      </div>
    </div>
  )
}
