import { useQuery } from "@tanstack/react-query";
import { getInstructorInfo } from "../service/instructorApi";

export function useGetInstructorCards() {
  return useQuery({
    queryKey: ["instructorCards"],
    queryFn: getInstructorInfo,
  });
}
