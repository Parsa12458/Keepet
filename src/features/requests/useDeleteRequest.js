import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRequest as deleteRequestApi } from "../../services/apiRequests";
import toast from "react-hot-toast";

export function useDeleteRequest() {
  const queryClient = useQueryClient();
  const { mutate: deleteRequest, isPending: isLoading } = useMutation({
    mutationFn: deleteRequestApi,
    onSuccess: () => {
      toast.success("درخواست مورد نظر با موفقیت لفو شد");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error("در لفو درخواست مشکلی پیش آمده! دوباره تلاش کنید.");
      console.error(error);
    },
  });

  return { deleteRequest, isLoading };
}
