import { useQuery } from "@tanstack/react-query";
import { getRequests } from "../../services/apiRequests";

export function useRequests() {
  const {
    data: requests,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["requests"],
    queryFn: getRequests,
  });

  return { requests, isLoading, error };
}
