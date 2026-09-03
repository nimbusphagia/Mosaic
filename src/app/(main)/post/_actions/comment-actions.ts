"use server";
import { revalidatePath } from "next/cache";
import { apiClient } from "@/_lib/api/api-client";

export async function handleCommentSubmit(formData: FormData) {
  const comment = formData.get("comment") as string;
  const postId = formData.get("postId") as string;
  if (!comment || !postId) return;

  await apiClient(`/posts/${postId}/comments`, {
    method: "POST",
    auth: true,
    body: JSON.stringify({ comment }),
  });

  revalidatePath(`/post/${postId}`);
}
