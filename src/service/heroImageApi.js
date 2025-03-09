import supabase from "./supabase"

export const getHeroImage = async () => {
  const {data, error} = await supabase.from("hero_cover").select("*")
  if(error) throw new Error(error.message)
  
  return data
}