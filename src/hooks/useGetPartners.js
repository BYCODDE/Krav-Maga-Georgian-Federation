import { useQuery } from "@tanstack/react-query";
import { getPartners } from "../service/partnersapi";

export const useGetPartners = () => {
 return useQuery({
    queryKey: ["partners"],
    queryFn: getPartners,
  });
};