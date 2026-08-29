"use client"
import styles from "./navbar.module.css"
import { Logo } from "../logo/logo"
import { Searchbar } from "../search-bar/search-bar"
import Link from "next/link"
import { Bell, Mail, UserRound } from "lucide-react"

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo containerClass={styles.logo} />
      <ul className={styles["nav-links"]}>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/Explore">Explore</Link>
        </li>
      </ul>
      <Searchbar containerClass={styles.searchbar} />
      <ul className={styles["menu"]}>
        <li>
          <button>
            <Bell />
          </button>
        </li>
        <li>
          <button>
            <Mail />
          </button>
        </li>

        <li>
          <Link href="/profile">
            <UserRound />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
