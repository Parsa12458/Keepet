import Button from "../../ui/Button";
import InputCheckbox from "../../ui/InputCheckbox";
import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputTextarea from "../../ui/InputTextArea";

function PetForm({ title }) {
  return (
    <div className="text-brown">
      <h2 className="mb-7 text-2xl font-bold">{title}</h2>
      <form className="grid grid-cols-3 items-start gap-x-10 gap-y-5">
        <InputSelect
          id="petType"
          label="نوع پت"
          options={["سگ", "گربه", "طوطی"]}
        />
        <InputField id="petName" label="اسم پت" type="text" />
        <InputSelect id="petGender" label="جنس پت" options={["نر", "ماده"]} />
        <InputField id="petRace" label="نژاد پت" type="text" />
        <InputField id="petBirthYear" label="سال تولد پت" type="number" />
        <InputField
          id="petVaccinationCount"
          label="تعداد واکسناسیون پت"
          type="number"
        />
        <InputTextarea id="petDisease" label="بیماری" />
        <InputTextarea id="petFeed" label="تغذیه" />
        <InputField
          id="petWeight"
          label="آپلود عکس پت"
          type="file"
          accept=".png, .jpg, .jpeg"
        />
        <InputTextarea id="petDescription" label="توضیحات" />
        <div className="mt-7 self-start">
          <InputCheckbox id="isPetSterile" label="عقیم است؟" />
        </div>
        <div className="col-span-3 mr-auto mt-6 gap-3">
          <Button
            additionalStyles="flex items-center justify-center gap-2 py-2.5 px-5"
            type="submit"
            variation="primary"
          >
            <img src="/icons/add-icon.svg" className="w-5" />
            <span>افزودن پت</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PetForm;
