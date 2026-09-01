import detailStyles from "./post-details.module.css"

type PostDetailsProps = {
  title: string,
  createdAt: string,
  description: string,
  containerClass?: string,
}
export default function PostDetails({ title, createdAt, description, containerClass = "" }: PostDetailsProps) {
  return (
    <div className={`${detailStyles["body"]} ${containerClass}`}>
      <header className={detailStyles["header"]}>
        <h2>{title}</h2>
        <p>{createdAt}</p>
      </header>
      <div className={detailStyles["description"]}>
        <p>{description}</p>
      </div>
    </div>
  )
}
