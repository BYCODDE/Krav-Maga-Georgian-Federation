import supabase from "./supabase";

export async function aboutKravMaga() {
  const { data, error } = await supabase.from("about").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
