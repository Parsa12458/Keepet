import PetsList from "../features/pets/PetsList";
import Button from "../ui/Button";

function PetsPage() {
  return (
    <div>
      <div>
        <Button additionalStyles="flex items-center justify-center gap-2 py-2 px-6">
          <img src="/icons/add-icon.svg" className="w-5" />
          <span>افزودن پت</span>
        </Button>
      </div>
      <PetsList />
    </div>
  );
}

export default PetsPage;
