import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: (data) => loginApi(data),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.data);
      toast.success("Loged in successfully");
      data?.data?.user?.user_metadata?.isAdmin
        ? navigate("/admin")
        : navigate("/app");
    },
    onError: (error) => {
      toast.error(error.message || "Login failed");
    },
  });

  return { login, isLoading };
}
