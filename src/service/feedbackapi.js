import supabase from "./supabase"

export const getFeedbackApi = async () => {
  const {data, error} = await supabase.from("feedback").select("*")
  if(error) throw new Error(error.message)
  
  return data
}