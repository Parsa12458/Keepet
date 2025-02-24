import { useForm } from "react-hook-form";
import InputField from "../../ui/InputField";
import toast from "react-hot-toast";
import Button from "../../ui/Button";
import { queryClient } from "../../App";
import { useUpdateUser } from "./useUpdateUser";

function EditUserForm() {
  const user = queryClient.getQueryData(["user"]);
  const { updateUser, isLoading } = useUpdateUser();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: user?.user_metadata?.fullName,
      email: user?.email,
      phoneNumber: user?.user_metadata?.phoneNumber,
    },
  });

  function onSubmit({ fullName, email, phoneNumber, password }) {
    updateUser({ fullName, email, phoneNumber, password });
  }

  function onError(errors) {
    toast.dismiss();
    Object.keys(errors).forEach((key) => {
      toast.error(errors[key].message);
    });
  }

  return (
    <div className="text-brown dark:text-background">
      <h2 className="mb-7 text-2xl font-bold sm:text-xl">
        ویرایش اطلاعات کاربری
      </h2>
      <form
        className="grid grid-cols-2 gap-x-10 gap-y-5 md:gap-x-5 sm:mx-auto sm:max-w-64 sm:grid-cols-1"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <InputField
          id="fullName"
          label="نام و نام خانوادگی"
          type="text"
          register={register}
          validationRules={{ required: "نام و نام خانوادگی را وارد کنید" }}
          autoComplete="off"
        />
        <InputField
          id="email"
          label="ایمیل"
          type="email"
          register={register}
          validationRules={{
            required: "ایمیل خود را وارد کنید",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "ایمیل خود را درست وارد کنید",
            },
          }}
          autoComplete="off"
          disabled={true}
        />
        <InputField
          id="phoneNumber"
          label="شماره تلفن"
          type="tel"
          placeholder="09123456789"
          register={register}
          validationRules={{
            required: "شماره تلفن خود را وارد کنید",
            pattern: {
              value: /^09\d{9}$/,
              message: "شماره تلفن خود را درست وارد کنید",
            },
          }}
          autoComplete="off"
        />
        <div className="col-span-2 mr-auto mt-6 gap-3 sm:col-span-1">
          <Button
            type="submit"
            variation="primary"
            additionalStyles="!px-10"
            isLoading={isLoading}
          >
            تایید
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditUserForm;
