"use server";

import { apiClient } from "@/_lib/api/api-client";
import { ProfileLazy } from "@/_types/profile";

export async function searchAction(formData: FormData) {
  const query = formData.get("query");
  if (!query) return [];

  const profiles = await apiClient<ProfileLazy[]>(`/profiles?query=${query}`, {
    auth: true,
    method: "GET",
  });
  return profiles;
}
