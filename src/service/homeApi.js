import supabase from "./supabase";

export async function getHomePriceCards() {
  const { data, error } = await supabase.from("classes").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function putSignUp({ name, username, age, phone }) {
  const { data, error } = await supabase
    .from("futureStudents")
    .insert([{ name: name, username: username, age: age, phone: phone }]);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
