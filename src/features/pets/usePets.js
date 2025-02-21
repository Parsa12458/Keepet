import { useQuery } from "@tanstack/react-query";
import { getPets } from "../../services/apiPets";

export function usePets() {
  const {
    data: pets,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pets"],
    queryFn: getPets,
  });

  return { pets, isLoading, error };
}
