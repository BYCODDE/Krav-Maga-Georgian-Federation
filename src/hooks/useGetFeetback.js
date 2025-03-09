import { useQuery } from "@tanstack/react-query";
import { getFeedbackApi } from "../service/feedbackapi";

export const useGetFeedback = () => {
  return useQuery({
    queryKey: ["feedback"],
    queryFn: getFeedbackApi
  })
}