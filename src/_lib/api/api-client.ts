import "server-only";
import { getAccessToken } from "./get-access-token";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export class ApiError extends Error {
  status: number;
  info: unknown;
  constructor(message: string, status: number, info: unknown) {
    super(message);
    this.status = status;
    this.info = info;
  }
}

type ApiClientOptions = RequestInit & { auth?: boolean };

export async function apiClient<T>(
  path: string,
  options: ApiClientOptions = {},
): Promise<T> {
  const { auth, headers, ...rest } = options;

  const finalHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...(headers as Record<string, string>),
  };

  if (auth) {
    const token = await getAccessToken();
    if (token) finalHeaders["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    credentials: "include",
    ...rest,
    headers: finalHeaders,
  });

  if (!response.ok) {
    const info = await response.json().catch(() => null);
    throw new ApiError(
      info?.message ?? "An error occurred while fetching the data.",
      response.status,
      info,
    );
  }

  const text = await response.text();
  return text ? JSON.parse(text) : (null as T);
}
