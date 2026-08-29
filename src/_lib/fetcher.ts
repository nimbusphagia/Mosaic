import { apiClient } from "./api-client";

export const fetcher = <T>(path: string) => apiClient<T>(path);
