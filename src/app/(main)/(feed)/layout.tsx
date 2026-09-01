import { PropsWithChildren } from "react";
import { Navbar } from "@/app/_components/navbar/navbar";

export default function FeedLayout({ children }: PropsWithChildren) {
  return (
    <div>
      {children}
    </div>
  )

}
