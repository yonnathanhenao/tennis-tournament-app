"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { signIn } from "../core/services/auth.service";

export async function authenticate(_, formData) {
  const { email, password } = Object.fromEntries(formData);
  try {
    const accessToken = await signIn(email, password);
    cookies().set("token", accessToken, { secure: true });
    redirect("/");
  } catch (error) {
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "CredentialsSignin";
    }
    throw error;
  }
}
