import { useQuery } from "@tanstack/react-query";
import { aboutKravMaga } from "../service/aboutKravMagaApi";

export const useGetAboutKravmaga = () => {
  return useQuery({
    queryKey: ["AboutKravmaga"],
    queryFn: aboutKravMaga
  })
}