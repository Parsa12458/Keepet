import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editRequest as editRequestApi } from "../../services/apiRequests";
import toast from "react-hot-toast";

export function useEditRequest() {
  const queryClient = useQueryClient();
  const { mutate: editRequest, isPending: isLoading } = useMutation({
    mutationFn: editRequestApi,
    onSuccess: () => {
      toast.success("درخواست شما با موفقیت ویرایش شد.");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error("خطایی به وجود آمده است! دوباره تلاش کنید.");
      console.error(error);
    },
  });

  return { editRequest, isLoading };
}
