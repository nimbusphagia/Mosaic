import { PropsWithChildren } from "react";
import { Navbar } from "@/app/components/navbar/navbar";

export default function FeedLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )

}
