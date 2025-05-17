import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: (data) => signUpApi(data),
    onSuccess: () => {
      toast.success("You signed up successfuly.");
    },
  });
  return { signUp, isLoading };
}
