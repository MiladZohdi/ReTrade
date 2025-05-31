import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ApiLogOut } from "../../services/apiAuth";

export function useLogOut() {
  const { mutate: logout } = useMutation({
    mutationFn: () => ApiLogOut(),
    onSuccess: () => {
      toast.success("You logged out successfully.");
    },
    onError: (error) => {
      toast.error(error.message || "Logout failed");
    },
  });
  return { logout };
}
