import { PropsWithChildren } from "react";
import { Navbar } from "./components/navbar";

export default function FeedLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )

}
