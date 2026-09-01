"use client"
import { ProfileLazy } from "@/_types/profile"
import ProfileAvatar from "../../avatar/profile-avatar"
import styles from "./search-bar.module.css"

type SearchResultsProps = {
  profiles: ProfileLazy[],
}
export default function SearchResults({ profiles }: SearchResultsProps) {
  return (
    <ul className={styles.results}>
      {
        profiles.map((p) =>
          <ProfileAvatar
            key={p.publicId}
            profile={p}
            containerClass={styles.result}
          />
        )
      }
    </ul>
  )
}

