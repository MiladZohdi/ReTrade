import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetUser } from "../Auth/useGetUser";
import { ApiToggleSavedAd } from "../../services/apiAds";
import toast from "react-hot-toast";

export function useToggleSavedAd() {
  const { user_id } = useGetUser();
  const queryClient = useQueryClient();

  const { mutate: toggleSavedAd, isPending: loadingToggleSavedAd } =
    useMutation({
      mutationFn: ({ ad_id, isSaved }) =>
        ApiToggleSavedAd({ user_id, ad_id: ad_id, isSaved }),
      onMutate: () => {
        toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
          loading: "Saving...",
          error: "Failed",
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["savedAds"] });
      },
    });
  return {
    toggleSavedAd,
    loadingToggleSavedAd,
  };
}
