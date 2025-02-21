import supabase from "./supabase";
import { queryClient } from "../App";

export async function getRequests() {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("requests")
    .select("*")
    .or(`userId.eq.${user.id}`);

  if (error)
    throw new Error(
      "خطایی در دریافت درخواست ها به وجود آمده! دوباره تلاش کنید.",
    );

  return data;
}

export async function addRequest(newRequest) {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("requests")
    .insert([{ ...newRequest, userId: user.id }])
    .select();

  if (error)
    throw new Error("خطایی در افزودن درخواست پیش آمده! دوباره تلاش کنید.");

  return data;
}

export async function editRequest(newRequest) {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("requests")
    .update({ ...newRequest })
    .eq("id", newRequest.id)
    .or(`userId.eq.${user.id}`)
    .select();

  if (error)
    throw new Error("خطایی در افزودن پت به وجود آمده! دوباره تلاش کنید.");

  return data;
}

export async function deleteRequest(id) {
  const user = queryClient.getQueryData(["user"]);

  const { error } = await supabase
    .from("requests")
    .delete()
    .eq("id", id)
    .or(`userId.eq.${user.id}`);

  if (error)
    throw new Error("خطایی در لغو درخواست به وجود آمده! دوباره تلاش کنید.");
}
