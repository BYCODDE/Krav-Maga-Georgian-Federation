import { useQuery } from "@tanstack/react-query";
import { getHeroImage } from "../service/heroImageApi";

export const useGetHeroImage = () => {
  return useQuery({
    queryKey: ["heroImage"],
    queryFn: getHeroImage
  })
}