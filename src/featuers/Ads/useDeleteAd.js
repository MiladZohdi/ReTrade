import { useMutation } from "@tanstack/react-query";
import { ApiDeleteAd } from "../../services/apiAds";
import toast from "react-hot-toast";

export function useDeleteAd() {
  const { mutate: deleteAd, isPending: loadingDeleteAd } = useMutation({
    mutationFn: (id) => ApiDeleteAd(id),
    onSuccess: () => {
      toast.success("Ad deleted successfully");
    },
  });

  return { deleteAd, loadingDeleteAd };
}
