import PetForm from "../features/pets/PetForm";
import PetsList from "../features/pets/PetsList";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

function PetsPage() {
  return (
    <div>
      <div>
        <Button
          additionalStyles="flex items-center justify-center gap-2 py-2 px-6"
          onClick={() => document.getElementById("addPet").showModal()}
        >
          <img src="/icons/add-icon.svg" className="w-5" />
          <span>افزودن پت</span>
        </Button>
        <Modal
          content={<PetForm title="مشخصات پت خود را وارد کنید." />}
          id="addPet"
        />
      </div>
      <PetsList />
    </div>
  );
}

export default PetsPage;
