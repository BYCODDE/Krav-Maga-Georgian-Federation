import { useQuery } from "@tanstack/react-query";
import { getKravmagaExams } from "../service/kravmagaExamApi";

export function useGetkravmagaExam() {
  return useQuery({
    queryKey: ["exam"],
    queryFn: getKravmagaExams,
  });
}
