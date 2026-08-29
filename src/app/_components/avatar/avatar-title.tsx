type AvatarTitleProps = {
  title: string,
  className?: string,
}
export function AvatarTitle({ title, className }: AvatarTitleProps) {
  return (
    <p className={`${className}`}>{title}</p>
  )
}
