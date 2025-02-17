/* eslint-disable react/prop-types */
import { useDarkMode } from "../../contexts/DarkModeContext";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { calculateAge } from "../../utils/helper";
import PetForm from "./PetForm";

function PetItem({ pet }) {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      key={pet.petId}
      className="flex items-center justify-start gap-10 rounded bg-paleGreen p-7 lg:max-w-72 lg:flex-col dark:bg-chocolateBrown"
    >
      <div className="h-36 w-56 shrink-0 overflow-hidden rounded">
        <img
          src={pet.petImgUrl}
          alt={`${pet.petName}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-x-8 text-sm font-medium text-brown lg:grid-cols-2 lg:gap-y-4 sm:gap-x-0 dark:font-normal dark:text-background">
        <div>
          <span>نوع: </span> <span>{pet.petType}</span>
        </div>
        <div>
          <span>نژاد: </span> <span>{pet.petRace}</span>
        </div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-4 lg:col-start-1 lg:col-end-3 lg:row-start-5 lg:row-end-6">
          <span>بیماری: </span> <span>{pet.petDisease}</span>
        </div>
        <div className="col-start-4 col-end-5 row-start-1 row-end-4 lg:col-start-1 lg:col-end-3 lg:row-auto lg:row-start-6 lg:row-end-7">
          <span>توضیحات: </span> <span>{pet.petDescription}</span>
        </div>
        <div>
          <span>اسم: </span> <span>{pet.petName}</span>
        </div>
        <div>
          <span>جنس: </span> <span>{pet.petGender}</span>
        </div>
        <div>
          <span>سن: </span> <span>{calculateAge(pet.petBirthYear)}</span>
        </div>
        <div>
          <span>عقیم: </span>{" "}
          {pet.isPetSterile ? (
            <img src="/icons/tick-icon.svg" className="inline w-5" />
          ) : (
            <img src="/icons/cross-icon.svg" className="inline w-5" />
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 lg:mt-auto">
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
              title={`ویرایش اطلاعات ${pet.petName}`}
              pet={pet}
              petOperation="edit"
            />
          </Modal.Window>
        </Modal>

        <Button
          variation="red"
          type="button"
          additionalStyles="flex w-36 h-9 items-center justify-center gap-1 text-xs"
        >
          <img src="/icons/bin-icon.svg" className="w-5 translate-y-[-1px]" />
          <span>حذف پت</span>
        </Button>
      </div>
    </div>
  );
}

export default PetItem;
