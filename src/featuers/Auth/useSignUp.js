import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: (data) => signUpApi(data),
    onSuccess: () => {
      toast.success("You signed up successfuly.");
      navigate("../app");
    },
    onError: (error) => {
      toast.error(error.message || "Sign up failed");
    },
  });
  return { signUp, isLoading };
}
