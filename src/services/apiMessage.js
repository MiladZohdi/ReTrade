import supabase from "./supabase";

export async function ApiAddMessage({ user_id, message }) {
  const { error } = await supabase
    .from("messages")
    .insert([{ user_id, message, isRead: false }]);

  if (error) throw new Error(error.message);
}

export async function ApiGetMessages(user_id) {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data || [];
}

export async function ApiUpdateMessage({ message_id }) {
  const { error } = await supabase
    .from("messages")
    .update({ isRead: true })
    .eq("id", message_id);

  if (error) throw new Error(error.message);
}
