import supabase from "./supabase";

export async function getHomePriceCards() {
  const { data, error } = await supabase.from("classes").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
