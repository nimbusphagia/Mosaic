type AvatarTitleProps = {
  title: string,
  className?: string,
}
export default function AvatarTitle({ title, className }: AvatarTitleProps) {
  return (
    <p className={`${className}`}>{title}</p>
  )
}
