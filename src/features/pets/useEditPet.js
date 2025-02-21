import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPet as editPetApi } from "../../services/apiPets";
import toast from "react-hot-toast";

export function useEditPet() {
  const queryClient = useQueryClient();
  const { mutate: editPet, isPending: isLoading } = useMutation({
    mutationFn: editPetApi,
    onSuccess: (pet) => {
      toast.success(`${pet.at(0).name} با موفقیت ویرایش شد.`);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error("خطایی به وجود آمده است! دوباره تلاش کنید.");
      console.error(error);
    },
  });

  return { editPet, isLoading };
}
