export class ApiError extends Error {
  status: number;
  info: unknown;
  constructor(message: string, status: number, info: unknown) {
    super(message);
    this.status = status;
    this.info = info;
  }
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function clientApiFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const { headers, ...rest } = options;
  const isFormData = rest.body instanceof FormData;

  const finalHeaders: Record<string, string> = {
    ...(!isFormData && { "Content-Type": "application/json" }),
    ...(headers as Record<string, string>),
  };

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
