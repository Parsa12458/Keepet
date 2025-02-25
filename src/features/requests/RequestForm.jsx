/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputTextarea from "../../ui/InputTextArea";
import { toPersianDate } from "../../utils/helper";
import toast from "react-hot-toast";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { useAddRequest } from "./useAddRequest";
import { usePets } from "../pets/usePets";
import { useEditRequest } from "./useEditRequest";
import { useEffect } from "react";

function RequestForm({ title, request, requestOperation }) {
  const { isDarkMode } = useDarkMode();
  const { pets, isLoading, error } = usePets();
  const { addRequest, isLoading: isAdding } = useAddRequest();
  const { editRequest, isLoading: isEditing } = useEditRequest();
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      selectedPet: request?.selectedPet.name,
      startDate: request?.startDate,
      endDate: request?.endDate,
      location: request?.location,
      description: request?.description,
    },
  });

  useEffect(() => {
    if (!isLoading && pets?.length > 0) {
      setValue("selectedPet", request?.selectedPet.name || pets[0]?.name);
    }
  }, [isLoading, pets, setValue, request?.selectedPet.name]);

  function onSubmit(data) {
    const selectedPetObj = pets.find((pet) => data.selectedPet === pet.name);
    if (requestOperation === "add")
      addRequest({
        ...data,
        selectedPet: {
          id: selectedPetObj.id,
          name: selectedPetObj.name,
          image: selectedPetObj.image,
        },
      });
    if (requestOperation === "edit")
      editRequest({
        ...data,
        id: request.id,
        selectedPet: {
          id: selectedPetObj.id,
          name: selectedPetObj.name,
          image: selectedPetObj.image,
        },
      });
  }

  function onError(errors) {
    toast.dismiss();
    Object.keys(errors).forEach((key) => {
      toast.error(errors[key].message);
    });
  }

  if (error) throw new Error("خطایی پیش آمده! دوباره تلاش کنید.");

  return (
    <div className="text-brown dark:text-background">
      <h2 className="mb-7 text-2xl font-bold sm:text-xl">{title}</h2>
      <form
        className="grid grid-cols-3 items-start gap-x-10 gap-y-5 md:grid-cols-2 md:gap-x-5 sm:mx-auto sm:max-w-64 sm:grid-cols-1"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <InputSelect
          id="selectedPet"
          label="پت خود را انتخاب کنید*"
          options={isLoading ? ["بارگذاری..."] : pets?.map((pet) => pet?.name)}
          register={register}
          validationRules={{ required: "یک پت را انتخاب کنید" }}
          disabled={isLoading}
        />
        <InputField
          id="startDate"
          label="تاریخ شروع درخواست*"
          type="text"
          placeholder={`مثال: ${toPersianDate(new Date())}`}
          register={register}
          validationRules={{
            required: "تاریخ شروع درخواست را وارد کنید",
          }}
        />
        <InputField
          id="endDate"
          label="تاریخ پایان درخواست*"
          type="text"
          placeholder={`مثال: ${toPersianDate(
            new Date().setDate(new Date().getDate() + 3),
          )}`}
          register={register}
          validationRules={{
            required: "تاریخ پایان درخواست را وارد کنید",
          }}
        />
        <InputTextarea
          id="location"
          label="آدرس*"
          register={register}
          validationRules={{
            required: "آدرس خود را وارد کنید",
          }}
        />
        <InputTextarea id="description" label="توضیحات" register={register} />

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
            <span>
              {requestOperation === "add" ? "ثبت درخواست" : "ویرایش درخواست"}
            </span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RequestForm;
