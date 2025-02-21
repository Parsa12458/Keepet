import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("خروج با موفقیت انجام شد. منتظر بازگشت شما هستیم!");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error("خطایی به وجود آمده است. دوباره تلاش کنید!");
      console.error(error);
    },
  });

  return { logout, isLoading };
}
