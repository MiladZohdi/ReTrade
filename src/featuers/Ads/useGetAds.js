import { useQuery } from "@tanstack/react-query";
import { ApiGetAds } from "../../services/apiAds";

export default function useGetUserAds() {
  const { data: ads, isPending: adsLoading } = useQuery({
    queryKey: ["Ads"],
    queryFn: ApiGetAds,
  });

  return { ads, adsLoading };
}
