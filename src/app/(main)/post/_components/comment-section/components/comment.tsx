import { CommentRes } from "@/_types/comments"
import commentStyles from "../comments.module.css"
import ProfileAvatar from "@/app/(main)/_components/avatar/profile-avatar"
import { format } from "date-fns"

type CommentComponentProps = {
  comment: CommentRes,
}
export default function CommentComponent({ comment }: CommentComponentProps) {
  return (
    <div className={commentStyles.comment}>
      <header className={commentStyles["comment-header"]}>
        <ProfileAvatar
          containerClass={commentStyles["comment-author"]}
          profile={comment.author}
          redirect={true}
        />
        <p className={commentStyles["comment-date"]}>{format(comment.createdAt, "MMM do, yyyy")}</p>
      </header>
      <div className={commentStyles["comment-body"]}>
        <p>{comment.text}</p>
      </div>
    </div>
  )
}
