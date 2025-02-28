import { useMutation } from "@tanstack/react-query";
import { putSignUp } from "../service/homeApi";
import { toast } from "react-toastify";

export function usePutSignUp() {
  const mutation = useMutation({
    mutationFn: ({ name, username, age, phone }) =>
      putSignUp({ name: name, username: username, age: age, phone: phone }),
    onSuccess: () => {
      toast.success("Your data has been sent successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return mutation;
}
