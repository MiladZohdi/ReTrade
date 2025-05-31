import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiUpdateMessage } from "../../services/apiMessage";
import { useGetUser } from "../Auth/useGetUser";

export function useUpdateMessage() {
  const queryClient = useQueryClient();
  const { user_id } = useGetUser();
  const { mutate: updateMessage, isLoading } = useMutation({
    mutationFn: ({ message_id }) => ApiUpdateMessage({ message_id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages", user_id] });
    },
  });

  return {
    updateMessage,
    isLoading,
  };
}
