import { appTitle } from "@/_lib/constants"

type LogoProps = {
  size?: "sm" | "md" | "lg",
  containerClass?: string,
}
export default function Logo({ containerClass, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-16 w-auto',
  };
  return (
    <div
      className={`${sizeClasses[size]} ${containerClass ?? ""} flex items-center justify-center overflow-hidden`}
    >
      <img
        src="/logo.jpg"
        alt={appTitle}
        className="h-full w-full object-contain"
        loading="eager"
      />
    </div>
  )
}
