import { useMutation } from "@tanstack/react-query";
import { ApiConfirmRejectAd } from "../../services/apiAds";
import toast from "react-hot-toast";

export function useConfirmReject() {
  const { mutate: confirmOrReject, isPending: isLoadingConfirmReject } =
    useMutation({
      mutationFn: ({ ad_title, ad_id, user_id, admin_id, isConfirmed }) =>
        ApiConfirmRejectAd({ ad_title, ad_id, user_id, admin_id, isConfirmed }),
      onSuccess: () => {
        toast.success("Ad Confirmed successfully.");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  return { confirmOrReject, isLoadingConfirmReject };
}
