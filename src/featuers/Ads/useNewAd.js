import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ApiNewAd } from "../../services/apiAds";

export default function useNewAd() {
  const { mutate: newAd, isPending: loadingNewAd } = useMutation({
    mutationFn: (data) => ApiNewAd(data),
    onSuccess: () => {
      toast.success(
        "Your Add has been successfuly uploaded! Please wait till it's confirmed."
      );
    },
  });

  return { newAd, loadingNewAd };
}
