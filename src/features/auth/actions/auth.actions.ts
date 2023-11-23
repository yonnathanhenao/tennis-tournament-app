import { redirect } from "next/navigation";
import { signIn } from "../core/services/auth.service";

export async function authenticate(_, formData) {
  const { email, password } = Object.fromEntries(formData);
  try {
    const accessToken = await signIn(email, password);
    localStorage.setItem("accessToken", accessToken);
    redirect("/");
  } catch (error) {
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "CredentialsSignin";
    }
    throw error;
  }
}
