import { handleCommentSubmit } from "../../../_actions/comment-actions"
import commentStyles from "../comments.module.css"

type CommentFormProps = {
  postId: string,
}

export default async function CommentForm({ postId }: CommentFormProps) {
  return (
    <form
      className={commentStyles["form"]}
      action={handleCommentSubmit}
    >
      <input type="hidden" name="postId" value={postId} />

      <input
        className={commentStyles["comment-input"]}
        type="text"
        name="comment"
        placeholder="Share your thoughts"
      />
    </form>
  )
}

