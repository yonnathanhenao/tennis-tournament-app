import { cookies } from "next/headers";

export default class ApiConfig {
  private static instance: ApiConfig;

  public basePath: string;
  private headers: HeadersInit;

  private constructor() {
    this.basePath = process.env.API_BASE_PATH as string;
    this.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  public static getInstance(): ApiConfig {
    if (!ApiConfig.instance) {
      ApiConfig.instance = new ApiConfig();
    }

    return ApiConfig.instance;
  }

  getHeaders(): HeadersInit {
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    return token
      ? { ...this.headers, Authorization: `Bearer ${token.value}` }
      : this.headers;
  }
}
