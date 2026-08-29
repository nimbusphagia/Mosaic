const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

class ApiError extends Error {
  status: number;
  info: unknown;
  constructor(message: string, status: number, info: unknown) {
    super(message);
    this.status = status;
    this.info = info;
  }
}

async function apiClient<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
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

export { apiClient, ApiError };
