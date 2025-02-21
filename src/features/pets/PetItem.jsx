/* eslint-disable react/prop-types */
import { useDarkMode } from "../../contexts/DarkModeContext";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { calculateAge, truncateText } from "../../utils/helper";
import PetForm from "./PetForm";
import { useDeletePet } from "./useDeletePet";

function PetItem({ pet }) {
  const { isDarkMode } = useDarkMode();
  const { deletePet, isLoading } = useDeletePet();

  return (
    <div
      key={pet.id}
      className="flex items-center justify-start gap-10 rounded bg-paleGreen p-7 lg:max-w-72 lg:flex-col dark:bg-chocolateBrown"
    >
      <div className="h-36 w-56 shrink-0 overflow-hidden rounded">
        <img
          src={pet.image}
          alt={`${pet.name}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid w-full grid-cols-4 items-start justify-between gap-x-8 gap-y-5 text-sm font-medium text-brown lg:grid-cols-2 lg:gap-y-4 sm:gap-x-0 dark:font-normal dark:text-background">
        <div>
          <span>نوع: </span> <span>{pet.type}</span>
        </div>
        <div>
          <span>نژاد: </span> <span>{pet.race}</span>
        </div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-4 lg:col-start-1 lg:col-end-3 lg:row-start-5 lg:row-end-6">
          <span>بیماری: </span>{" "}
          <span>{pet.disease ? truncateText(pet.disease, 75) : "-"}</span>
        </div>
        <div className="col-start-4 col-end-5 row-start-1 row-end-4 lg:col-start-1 lg:col-end-3 lg:row-auto lg:row-start-6 lg:row-end-7">
          <span>توضیحات: </span>{" "}
          <span>
            {pet.description ? truncateText(pet.description, 75) : "-"}
          </span>
        </div>
        <div>
          <span>اسم: </span> <span>{pet.name}</span>
        </div>
        <div>
          <span>جنس: </span> <span>{pet.gender}</span>
        </div>
        <div>
          <span>سن: </span> <span>{calculateAge(pet.birthYear)}</span>
        </div>
        <div>
          <span>عقیم: </span>{" "}
          {pet.isSterile ? (
            <img src="/icons/tick-icon.svg" className="inline w-5" />
          ) : (
            <img src="/icons/cross-icon.svg" className="inline w-5" />
          )}
        </div>
      </div>
      <div className="mr-auto flex flex-col items-center justify-center gap-2 lg:mr-0 lg:mt-auto">
        <Button
          variation="primary"
          type="button"
          additionalStyles="flex w-36 h-9 items-center justify-center gap-2 text-xs"
        >
          {isDarkMode ? (
            <img src="/icons/add-envelope-dark-icon.svg" className="w-4" />
          ) : (
            <img src="/icons/add-envelope-icon.svg" className="w-4" />
          )}
          <span>ارسال درخواست</span>
        </Button>
        <Modal>
          <Modal.Open opens="editPet">
            <Button
              variation="secondary"
              type="button"
              additionalStyles="flex w-36 h-9 items-center justify-center gap-2 text-xs"
            >
              {isDarkMode ? (
                <img src="/icons/edit-dark-icon.svg" className="w-4" />
              ) : (
                <img src="/icons/edit-icon.svg" className="w-4" />
              )}
              <span>ویرایش اطلاعات</span>
            </Button>
          </Modal.Open>
          <Modal.Window name="editPet">
            <PetForm
              title={`ویرایش اطلاعات ${pet.name}`}
              pet={pet}
              petOperation="edit"
            />
          </Modal.Window>
        </Modal>

        <Button
          variation="red"
          type="button"
          additionalStyles="flex w-36 h-9 items-center justify-center gap-1 text-xs"
          isLoading={isLoading}
          onClick={() => deletePet(pet.id)}
        >
          <img src="/icons/bin-icon.svg" className="w-5 translate-y-[-1px]" />
          <span>حذف پت</span>
        </Button>
      </div>
    </div>
  );
}

export default PetItem;
