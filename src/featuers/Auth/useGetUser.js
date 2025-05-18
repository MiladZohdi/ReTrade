import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "../../services/apiAuth";

export function useGetUser() {
  const { data: user, isPending: isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserApi,
  });

  return {
    user,
    isLoading,
    isAuth: user?.user.role === "authenticated",
    user_id: user?.user?.id,
    isAdmin: user?.user?.user_metadata?.isAdmin,
  };
}
