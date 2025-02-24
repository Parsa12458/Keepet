import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isLoading } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      toast.success("اطلاعات کاربری شما با موفقیت ویرایش شد");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error("خطایی به وجود آمده است. دوباره تلاش کنید!");
      console.error(error);
    },
  });

  return { updateUser, isLoading };
}
