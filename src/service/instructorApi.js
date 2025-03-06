import supabase from "./supabase";
export async function getInstructorInfo() {
  const { data, error } = await supabase.from("instructor").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
