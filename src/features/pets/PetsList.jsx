import toast from "react-hot-toast";
import PetItem from "./PetItem";
import { usePets } from "./usePets";

function PetsList() {
  const { pets, isLoading, error } = usePets();

  const sortedTasks = pets?.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  if (error) toast.error("خطایی در دریافت پت ها به وجود آمده است");

  return (
    <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:flex-wrap md:justify-center">
      {isLoading ? (
        <div className="mt-10 text-center text-3xl font-bold text-brown dark:text-white">
          دریافت پت ها...
        </div>
      ) : sortedTasks?.length !== 0 ? (
        sortedTasks?.map((pet) => <PetItem pet={pet} key={pet.id} />)
      ) : (
        <div className="mt-10 text-center text-3xl font-bold text-brown dark:text-white">
          اولین پت خود را اضافه کنید!
        </div>
      )}
    </div>
  );
}

export default PetsList;
