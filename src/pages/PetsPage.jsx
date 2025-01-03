import PetForm from "../features/pets/PetForm";
import PetsList from "../features/pets/PetsList";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

function PetsPage() {
  return (
    <div>
      <div>
        <Modal>
          <Modal.Open opens="addPet">
            <Button additionalStyles="flex items-center justify-center gap-2 py-2 px-6">
              <img src="/icons/add-icon.svg" className="w-5" />
              <span>افزودن پت</span>
            </Button>
          </Modal.Open>
          <Modal.Window name="addPet">
            <PetForm title="مشخصات پت خود را وارد کنید." />
          </Modal.Window>
        </Modal>
      </div>
      <PetsList />
    </div>
  );
}

export default PetsPage;
