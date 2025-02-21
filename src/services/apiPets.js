import { queryClient } from "../App";
import supabase, { supabaseUrl } from "../services/supabase";

export async function getPets() {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("pets")
    .select("*")
    .or(`userId.eq.${user.id}`);

  if (error)
    throw new Error("خطایی در دریافت پت ها به وجود آمده! دوباره تلاش کنید.");

  return data;
}

export async function addPet(newPet) {
  const user = queryClient.getQueryData(["user"]);

  const imageName = `${Math.random()}-${newPet.image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/petsImage//${imageName}`;

  // 1. Create pet
  const { data, error } = await supabase
    .from("pets")
    .insert([{ ...newPet, image: imagePath, userId: user.id }])
    .select();

  if (error)
    throw new Error("خطایی در افزودن پت به وجود آمده! دوباره تلاش کنید.");

  // 2. Upload image
  const { error: storageError } = await supabase.storage
    .from("petsImage")
    .upload(imageName, newPet.image);

  // 3. Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase
      .from("pets")
      .delete()
      .eq("id", data.id)
      .or(`userId.eq.${user.id}`);
    console.error(storageError);
    throw new Error("در آپلود عکس پت خطایی پیش آمده! دوباره تلاش کنید.");
  }

  return data;
}

export async function editPet(newPet) {
  const user = queryClient.getQueryData(["user"]);

  const hasImagePath = newPet.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newPet?.image?.name}`.replaceAll(
    "/",
    "",
  );
  const imagePath = hasImagePath
    ? newPet.image
    : `${supabaseUrl}/storage/v1/object/public/petsImage//${imageName}`;

  // 1. Edit pet
  const { data, error } = await supabase
    .from("pets")
    .update({ ...newPet, image: imagePath })
    .eq("id", newPet.id)
    .or(`userId.eq.${user.id}`)
    .select();

  if (error)
    throw new Error("خطایی در افزودن پت به وجود آمده! دوباره تلاش کنید.");

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("petsImage")
    .upload(imageName, newPet.image);

  // 3. Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase
      .from("pets")
      .delete()
      .eq("id", data.id)
      .or(`userId.eq.${user.id}`);
    console.error(storageError);
    throw new Error("خطایی در ویرایش پت به وجود آمده! دوباره تلاش کنید.");
  }

  return data;
}

export async function deletePet(id) {
  const user = queryClient.getQueryData(["user"]);

  const { error } = await supabase
    .from("pets")
    .delete()
    .eq("id", id)
    .or(`userId.eq.${user.id}`);

  if (error) throw new Error("خطایی در حذف پت به وجود آمده! دوباره تلاش کنید.");
}
