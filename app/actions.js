"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const handleSubmit = async (formData) => {
  const baseURL =
    process.env.NODE_ENV !== "production"
      ? process.env.ENV_BASE_URL
      : process.env.PRODUCTION_BASE_URL;

  console.log(baseURL);

  const submisionData = {
    name: formData.get("name"),
    surname: formData.get("surname"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch(`${baseURL}/api/epikinonia-form`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submisionData),
    });

    return { status: res.ok ? "success" : "error" };
  } catch (error) {
    console.error(error);
  }
};

export const revalidateEvens = async () => {
  revalidateTag("events");
};

export async function login(formData) {
  const supabase = await createClient(cookies());
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) {
    redirect("/");
  }
  revalidatePath("/", "layout");
  redirect("/admin");
}

export async function signOut() {
  const supabase = await createClient(cookies());
  const { error } = await supabase.auth.signOut();
  if (error) console.error(error);

  redirect("/");
}
