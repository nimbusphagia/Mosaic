"use server";

import { apiClient } from "@/_lib/api/api-client";
import { revalidatePath } from "next/cache";

export async function followProfile(formData: FormData) {
  const profileId = formData.get("profileId") as string;
  const currentPath = formData.get("currentPath") as string;
  if (!profileId || !currentPath) return;
  await apiClient(`/profiles/${profileId}/follow`, {
    auth: true,
    method: "POST",
  });
  revalidatePath(currentPath);
}

export async function unfollowProfile(formData: FormData) {
  const profileId = formData.get("profileId") as string;
  const currentPath = formData.get("currentPath") as string;
  if (!profileId || !currentPath) return;
  await apiClient(`/profiles/${profileId}/follow`, {
    auth: true,
    method: "DELETE",
  });
  revalidatePath(currentPath);
}
