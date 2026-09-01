import profileStyles from "./profile.module.css"
import { ProfileRes } from "@/_types/profile";
import ProfileMain from "./_components/profile-main/profile-main";
import { apiClient } from "@/_lib/api/api-client";
import ProfileHeader from "./_components/profile-header/profile-header";

async function loadProfile(): Promise<ProfileRes> {
  const profile = await apiClient<ProfileRes>(
    "/profiles/me", { auth: true })
  return profile;
}

export default async function ProfilePage() {
  const profile = await loadProfile();
  return (
    <div>
      {profile &&
        <>
          <ProfileHeader profile={profile} />
          <div className={profileStyles.main}>
            <ProfileMain
              posts={profile.posts}
              reposts={profile.reposts}
              collections={profile.collections}
            />
          </div>
        </>
      }
    </div>
  )
}
