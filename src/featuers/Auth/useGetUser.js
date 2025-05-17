import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "../../services/apiAuth";

export function useGetUser() {
  const { data: user, isPending: isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserApi,
  });

  console.log(user);

  return { user, isLoading, isAuth: user?.user.role === "authenticated" };
}
