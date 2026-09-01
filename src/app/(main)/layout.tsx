import { PropsWithChildren } from "react";
import Navbar from "./_components/navbar/navbar";

type MainLayoutProps = {
}
export default function MainLayout({ children }: PropsWithChildren<MainLayoutProps>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
