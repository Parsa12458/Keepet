import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRequest as addRequestApi } from "../../services/apiRequests";
import toast from "react-hot-toast";

export function useAddRequest() {
  const queryClient = useQueryClient();
  const { mutate: addRequest, isPending: isLoading } = useMutation({
    mutationFn: addRequestApi,
    onSuccess: () => {
      toast.success("درخواست با موفقیت ثبت شد.");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error("خطایی در ثبت درخواست به وجود آمده است! دوباره تلاش کنید.");
      console.error(error);
    },
  });

  return { addRequest, isLoading };
}
