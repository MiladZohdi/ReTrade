import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ApiUpdateAd } from "../../services/apiAds";
import { useParams } from "react-router";
import { useGetUser } from "../Auth/useGetUser";

export default function useUpdateAd() {
  const params = useParams();
  const queryClient = useQueryClient();
  const { user_id } = useGetUser();
  const { mutate: updateAd, isPending: loadingNewAd } = useMutation({
    mutationFn: (data) => ApiUpdateAd(data),
    onSuccess: () => {
      toast.success(
        "Your Add has been successfuly updated! Please wait till it's confirmed."
      );
      queryClient.invalidateQueries({ queryKey: ["ad", `${params.id}`] });
      queryClient.invalidateQueries({ queryKey: ["messages", user_id] });
    },
    onError: (error) => {
      toast.error(
        error.message || "Something went wrong while updating the ad."
      );
    },
  });

  return { updateAd, loadingNewAd };
}
