import { createClient } from "@/app/lib/supabase/server";

export async function getCurrentUser() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  return data?.claims ?? null;
}
