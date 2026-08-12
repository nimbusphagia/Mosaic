import { Logo } from "@/app/components/logo"
import { Searchbar } from "./search-bar/search-bar"

type NavbarProps = {

}
export function Navbar(props: NavbarProps) {
  return (
    <nav>
      <Logo />
      <Searchbar />
    </nav>
  )
}
