import { useQuery } from "@tanstack/react-query";
import { ApiGetUsersAds } from "../../services/apiAds";
import { useGetUser } from "../Auth/useGetUser";

export default function useGetUserAds() {
  const { user_id } = useGetUser();

  const { data: userAds, isPending: loadingUserAds } = useQuery({
    queryKey: ["userAds"],
    queryFn: () => ApiGetUsersAds(user_id),
  });

  return { userAds, loadingUserAds };
}
