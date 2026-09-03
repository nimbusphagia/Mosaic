import { followProfile, unfollowProfile } from "./follow-actions"

type FollowButtonProps = {
  profileId: string,
  currentPath: string,
  isFollowing: boolean,
}

export default async function FollowButton({ profileId, currentPath, isFollowing }: FollowButtonProps) {
  const data = {
    text: isFollowing ? "Unfollow" : "Follow",
    action: isFollowing ? unfollowProfile : followProfile,
  }
  return (

    <form action={followProfile}>
      <input
        type="hidden"
        name="profileId"
        value={profileId} />
      <input
        type="hidden"
        name="currentPath"
        value={currentPath} />
      <button
        type="submit"
        aria-label={`${data.text} button`}
      >
        {data.text}
      </button>

    </form>
  )
}


