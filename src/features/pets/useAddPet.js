import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPet as addPetApi } from "../../services/apiPets";
import toast from "react-hot-toast";

export function useAddPet() {
  const queryClient = useQueryClient();
  const { mutate: addPet, isPending: isLoading } = useMutation({
    mutationFn: addPetApi,
    onSuccess: (pet) => {
      toast.success(`${pet.at(0).name} با موفقیت افزوده شد.`);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error("خطایی به وجود آمده است! دوباره تلاش کنید.");
      console.error(error);
    },
  });

  return { addPet, isLoading };
}
