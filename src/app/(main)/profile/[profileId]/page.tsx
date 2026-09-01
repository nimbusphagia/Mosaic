import profileStyles from "../profile.module.css"
import { ProfileRes } from "@/_types/profile";
import ProfileMain from "../_components/profile-main/profile-main";
import { apiClient } from "@/_lib/api/api-client";
import ProfileHeader from "../_components/profile-header/profile-header";

async function loadProfile(profileId: string): Promise<ProfileRes> {
  const profile = await apiClient<ProfileRes>(
    `/profiles/${profileId}`, { auth: true })
  return profile;
}

type ProfilePageProps = {
  params: Promise<{ profileId: string }>
}
export default async function ProfilePage({ params }: ProfilePageProps) {
  const { profileId } = await params;
  const profile = await loadProfile(profileId);
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
