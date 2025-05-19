import supabase from "./supabase";

export async function getKravmagaExams() {
  const { data, error } = await supabase
    .from("exam")
    .select("*")
    .order("person_code", { ascending: true });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
