import { Navbar } from "../_components/navbar/navbar";
import ProfileSidebar from "./_components/profile-sidebar/profile-sidebar";
import { ProfileRes } from "@/_types/profile";
import ProfileMain from "./_components/profile-main/profile-main";
import { apiClient } from "@/_lib/api/api-client";

async function loadProfile(): Promise<ProfileRes> {
  const profile = await apiClient<ProfileRes>(
    "/profiles/me", { auth: true })
  return profile;
}

export default async function ProfilePage() {
  const profile = await loadProfile();
  return (
    <div>
      <Navbar />
      {profile &&
        <main>
          <ProfileSidebar
            nickname={profile.nickname}
            media={profile.picture.media!} // refactor to handle null media
            description={profile.description}
            followerCount={profile.followerCount}
            followingCount={profile.followingCount}
          />
          <ProfileMain
            posts={profile.posts}
            reposts={profile.reposts}
            collections={profile.collections}
          />
        </main>
      }
    </div>
  )
}
