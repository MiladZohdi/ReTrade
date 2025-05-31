import { useQuery } from "@tanstack/react-query";
import { ApiGetMessages } from "../../services/apiMessage";
import { useGetUser } from "../Auth/useGetUser";
export function useGetMessages() {
  const { user_id } = useGetUser();
  const { data, isPending: loadingMessages } = useQuery({
    queryKey: ["messages", user_id],
    queryFn: () => ApiGetMessages(user_id),
  });

  return { data, loadingMessages };
}
