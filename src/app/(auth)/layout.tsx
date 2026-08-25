import { PropsWithChildren } from "react";
import style from "./auth.module.css"

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className={style.card}>
      {children}
    </div>
  )
}
