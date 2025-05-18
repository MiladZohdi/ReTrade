import { useQuery } from "@tanstack/react-query";
import { useGetUser } from "../Auth/useGetUser";
import { ApiGetSavedAds } from "../../services/apiAds";

export default function useGetSavedAds() {
  const { user_id } = useGetUser();
  const { data: savedAds, isPending: loadingSavedAds } = useQuery({
    queryKey: ["savedAds"],
    queryFn: () => ApiGetSavedAds(user_id),
  });
  return { savedAds, loadingSavedAds };
}
