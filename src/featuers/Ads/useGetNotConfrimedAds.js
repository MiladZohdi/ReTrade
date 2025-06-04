import { useQuery } from "@tanstack/react-query";
import { ApiNotConfirmedAds } from "../../services/apiAds";

export default function useGetNotConfrimedAds() {
  const { data: notConfrimedAds, isPending: isLoadingNotConfrimed } = useQuery({
    queryKey: ["notConfirmedAds"],
    queryFn: ApiNotConfirmedAds,
  });

  return { notConfrimedAds, isLoadingNotConfrimed };
}
