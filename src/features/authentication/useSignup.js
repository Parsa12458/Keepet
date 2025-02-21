import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(`خوش آمدید ${user.user.user_metadata.fullName} عزیز!`);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error("خطایی به وجود آمده است. دوباره تلاش کنید!");
      console.error(error);
    },
  });

  return { signup, isLoading };
}
