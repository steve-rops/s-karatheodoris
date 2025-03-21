import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const getEvents = async () => {
  try {
    const { data, error } = await supabase.from("events").select("*");
    if (error) throw new Error(error.message);

    return data;
  } catch (error) {
    console.error(error);
  }
};
