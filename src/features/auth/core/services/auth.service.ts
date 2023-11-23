import { apiConfig } from "@/config/api/api.config";
import { loginUrl } from "../../constants/endpoints";

export async function signIn(email: string, password: string): Promise<string> {
  try {
    const response: { access_token: string } = await fetch(loginUrl, {
      headers: apiConfig.headers,
      method: "POST",
      body: JSON.stringify({ email, password }),
    }).then((res) => res.json());
    if (!response?.access_token) {
      throw new Error("Access Token not found");
    }
    return response?.access_token;
  } catch (error) {
    console.log("error", error);
    return error?.toString() ?? "";
  }
}
