import Repository from "@/config/api/repository";
import { loginUrl } from "../../constants/endpoints";

const repository = Repository.getInstance();

export async function signIn(email: string, password: string): Promise<string> {
  const response = await repository.post(loginUrl, { email, password });
  const { access_token } = response as { access_token: string };
  if (!access_token) {
    throw new Error("Access Token not found");
  }
  return access_token;
}
