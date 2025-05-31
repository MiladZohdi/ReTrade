import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiDeleteAd } from "../../services/apiAds";
import toast from "react-hot-toast";
import { useGetUser } from "../Auth/useGetUser";

export function useDeleteAd() {
  const { user_id } = useGetUser();
  const queryClient = useQueryClient();
  const { mutate: deleteAd, isPending: loadingDeleteAd } = useMutation({
    mutationFn: (id) => ApiDeleteAd(id),
    onSuccess: () => {
      toast.success("Ad deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["messages", user_id] });
    },
  });

  return { deleteAd, loadingDeleteAd };
}
