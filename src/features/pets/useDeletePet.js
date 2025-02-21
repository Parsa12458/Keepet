import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePet as deletePetApi } from "../../services/apiPets";
import toast from "react-hot-toast";

export function useDeletePet() {
  const queryClient = useQueryClient();
  const { mutate: deletePet, isPending: isLoading } = useMutation({
    mutationFn: deletePetApi,
    onSuccess: () => {
      toast.success("پت مورد نظر با موفقیت حذف شد");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error("در حذف پت مشکلی پیش آمده! دوباره تلاش کنید.");
      console.error(error);
    },
  });

  return { deletePet, isLoading };
}
