/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import InputCheckbox from "../../ui/InputCheckbox";
import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputTextarea from "../../ui/InputTextArea";
import toast from "react-hot-toast";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { useAddPet } from "./useAddPet";
import { useEditPet } from "./useEditPet";

function PetForm({ title, pet, petOperation = "add" }) {
  const { isDarkMode } = useDarkMode();
  const { addPet, isLoading: isAdding } = useAddPet();
  const { editPet, isLoading: isEditing } = useEditPet();

  // petOperation is either edit or add
  const { register, handleSubmit } = useForm({
    defaultValues: {
      type: pet?.type,
      name: pet?.name,
      gender: pet?.gender,
      race: pet?.race,
      birthYear: pet?.birthYear,
      vaccinationCount: pet?.vaccinationCount,
      disease: pet?.disease,
      image: pet?.image,
      feed: pet?.feed,
      description: pet?.description,
      isSterile: pet?.isSterile,
    },
  });

  function onSubmit(data) {
    if (petOperation === "add") addPet({ ...data, image: data?.image[0] });
    if (petOperation === "edit")
      editPet({
        ...data,
        id: pet.id,
        image: typeof data.image === "string" ? data.image : data.image[0],
      });
  }

  function onError(errors) {
    toast.dismiss();
    Object.keys(errors).forEach((key) => {
      toast.error(errors[key].message);
    });
  }

  return (
    <div className="text-brown dark:text-background">
      <h2 className="mb-7 text-2xl font-bold sm:text-xl">{title}</h2>
      <form
        className="grid grid-cols-3 items-start gap-x-10 gap-y-5 md:grid-cols-2 md:gap-x-5 sm:mx-auto sm:max-w-64 sm:grid-cols-1"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <InputSelect
          id="type"
          label="نوع پت*"
          options={["سگ", "گربه", "طوطی"]}
          register={register}
        />
        <InputField
          id="name"
          label="اسم پت*"
          type="text"
          register={register}
          validationRules={{ required: "اسم پت خود را وارد کنید" }}
        />
        <InputSelect
          id="gender"
          label="جنس پت*"
          options={["نر", "ماده"]}
          register={register}
        />
        <InputField
          id="race"
          label="نژاد پت*"
          type="text"
          register={register}
          validationRules={{ required: "نژاد پت خود را وارد کنید" }}
        />
        <InputField
          id="birthYear"
          label="سال تولد پت*"
          type="number"
          register={register}
          validationRules={{
            required: "سال تولد پت خود را وارد کنید",
            pattern: {
              value: /^1[34]\d{2}$/,
              message:
                "سال تولد نامعتبر است. سال را بین 1300 تا 1499 وارد کنید",
            },
          }}
        />
        <InputField
          id="vaccinationCount"
          label="تعداد واکسناسیون پت*"
          type="number"
          register={register}
          validationRules={{
            required: "تعداد واکسناسیون پت خود را وارد کنید",
            min: {
              value: 0,
              message: "تعداد واکسناسیون نمی‌تواند منفی باشد",
            },
            max: {
              value: 50,
              message: "تعداد واکسناسیون نمی‌تواند بیشتر از 50 باشد",
            },
            valueAsNumber: true,
            validate: {
              isInteger: (value) =>
                Number.isInteger(value) ||
                "تعداد واکسناسیون باید یک عدد صحیح باشد",
            },
          }}
        />
        <InputTextarea id="disease" label="بیماری" register={register} />
        <InputTextarea id="feed" label="تغذیه" register={register} />
        <InputField
          id="image"
          label="آپلود عکس پت"
          type="file"
          accept=".png, .jpg, .jpeg"
          register={register}
          validationRules={{
            required:
              petOperation === "edit" ? false : "یک عکس از پت آپلود کنید",
          }}
        />
        <InputTextarea id="description" label="توضیحات" register={register} />
        <div className="mt-7 self-start">
          <InputCheckbox id="isSterile" label="عقیم است؟" register={register} />
        </div>
        <div className="col-span-3 mr-auto mt-6 gap-3 md:col-span-2 sm:col-span-1">
          <Button
            additionalStyles="flex items-center justify-center gap-2 py-2.5 sm:py-1.5"
            type="submit"
            variation="primary"
            isLoading={isAdding || isEditing}
          >
            {isDarkMode ? (
              <img src="/icons/add-dark-icon.svg" className="w-5" />
            ) : (
              <img src="/icons/add-icon.svg" className="w-5" />
            )}
            <span>{petOperation === "add" ? "افزودن پت" : "ویرایش پت"}</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PetForm;
