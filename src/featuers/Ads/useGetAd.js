import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { ApiGetAd } from "../../services/apiAds";

export function useGetAd() {
  const params = useParams();

  const { data: ad, isPending: loadingAd } = useQuery({
    queryKey: ["ad", params.id],
    queryFn: () => ApiGetAd(params.id),
  });

  return { ad, loadingAd };
}
