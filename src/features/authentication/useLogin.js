import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      toast.success(`خوش برگشتید ${user.user.user_metadata.fullName} عزیز!`);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error("خطایی به وجود آمده است. دوباره تلاش کنید!");
      console.error(error);
    },
  });

  return { login, isLoading };
}
