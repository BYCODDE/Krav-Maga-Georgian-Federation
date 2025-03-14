import supabase from "./supabase";


export const getPartners = async () => {
  const { data, error } = await supabase.from("partners").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};