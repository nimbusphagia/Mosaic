"use client"
import { Logo } from "../logo/logo"
import { Searchbar } from "../search-bar/search-bar"

export function Navbar() {
  return (
    <nav>
      <Logo />
      <Searchbar />
    </nav>
  )
}
