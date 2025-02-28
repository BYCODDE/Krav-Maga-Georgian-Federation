import { useQuery } from "@tanstack/react-query";
import { getHomePriceCards } from "../service/homeApi";

export function useGetHomePriceCards() {
  return useQuery({
    queryKey: ["homePriceCards"],
    queryFn: getHomePriceCards,
  });
}
