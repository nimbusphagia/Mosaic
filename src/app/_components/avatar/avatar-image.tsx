type AvatarImageProps = {
  src: string,
  alt?: string,
  size?: "sm" | "md" | "lg",
  containerClass?: string,
}
export function AvatarImage({ src, alt, containerClass, size = "sm" }: AvatarImageProps) {
  const sizeClasses = {
    sm: 'h-6 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-16 w-auto',
  };
  return (
    <div
      className={`${sizeClasses[size]} ${containerClass} flex items-center justify-center overflow-hidden`}
    >
      <img
        src={src}
        alt={alt?.trim() ?? undefined}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </div>
  )
}
