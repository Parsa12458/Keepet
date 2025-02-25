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

  // 3. Delete the pet if there was an error uploading image
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

  // 3. Delete the pet if there was an error uploading image
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

  // 1. Retrieve the pet's image path from the database
  const { data: petData, error: petError } = await supabase
    .from("pets")
    .select("image")
    .eq("id", id)
    .single();

  if (petError) {
    throw new Error("خطایی در حذف پت به وجود آمده! دوباره تلاش کنید.");
  }

  const imageUrl = petData?.image;

  // 2. Extract the image path relative to the storage bucket
  let filePath = null;
  if (imageUrl) {
    try {
      const url = new URL(imageUrl);
      let pathname = url.pathname; // e.g., '/storage/v1/object/public/petsImage//filename.jpg'

      // Remove '/storage/v1/object/public/petsImage/' from the pathname to get the file path
      const prefix = "/storage/v1/object/public/petsImage/";
      if (pathname.startsWith(prefix)) {
        filePath = pathname.substring(prefix.length); // This gives us the file path within the bucket
      } else {
        throw new Error("خطایی در حذف پت به وجود آمده! دوباره تلاش کنید.");
      }

      // Remove any leading slashes
      filePath = filePath.replace(/^\/+/, "");
    } catch (e) {
      console.error("Error parsing image URL:", e);
      throw new Error("خطایی در حذف پت به وجود آمده! دوباره تلاش کنید.");
    }
  }

  // 3. Delete the pet record from the database
  const { error } = await supabase
    .from("pets")
    .delete()
    .eq("id", id)
    .eq("userId", user.id);

  if (error) {
    throw new Error("خطایی در حذف پت به وجود آمده! دوباره تلاش کنید.");
  }

  // 4. Delete the image from Supabase Storage
  if (filePath) {
    filePath = filePath.replace(/^\/+/, "");
    const { error: storageError } = await supabase.storage
      .from("petsImage")
      .remove([filePath]);

    if (storageError) {
      console.error(storageError);
      throw new Error("خطایی در حذف پت به وجود آمده! دوباره تلاش کنید.");
    }
  }
}
