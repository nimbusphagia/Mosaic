"use client"
import { ProfileLazy } from "@/_types/profile"
import { ProfileAvatar } from "../avatar/profile-avatar"

type SearchResultsProps = {
  profiles: ProfileLazy[],
}
export function SearchResults({ profiles }: SearchResultsProps) {
  return (
    <ul>
      {
        profiles.map((p) =>
          <ProfileAvatar
            key={p.publicId}
            profile={p} />
        )
      }
    </ul>
  )
}

