import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function LoginForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  function onError(errors) {
    toast.dismiss();
    Object.keys(errors).forEach((key) => {
      toast.error(errors[key].message);
    });
  }

  return (
    <div className="flex w-1/2 max-w-[800px] overflow-hidden rounded md:max-w-md md:flex-col-reverse lg:w-4/5">
      <div className="relative flex w-1/2 items-center justify-center px-6 text-center text-3xl font-normal sm:text-2xl md:w-full md:py-10">
        <img
          src="/images/cat-looking-outside.jpg"
          alt="Cat background image"
          className="absolute inset-0 h-full w-full object-cover object-right md:object-[0_-42vw]"
        />
        <div className="absolute inset-0 h-full w-full bg-brown/80 dark:bg-chocolateBrown/80"></div>
        <p className="relative text-white">
          حساب کاربری ندارید؟
          <Link
            to="/signup"
            className="block cursor-pointer underline underline-offset-8"
          >
            ثبت نام کنید
          </Link>
        </p>
      </div>
      <div className="w-1/2 bg-paleGreen px-10 py-12 text-brown sm:px-8 sm:pt-8 md:w-full dark:bg-chocolateBrown dark:text-background">
        <h1 className="text-center text-3xl font-bold sm:text-2xl">ورود</h1>
        <form
          className="mt-8 flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <InputField
            id="user"
            label="شماره تلفن یا ایمیل"
            type="text"
            register={register}
            validationRules={{
              required: "شماره تلفن یا ایمیل خود را وارد کنید",
              validate: {
                isEmailOrPhone: (value) => {
                  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                  const isPhoneNumber = /^09\d{9}$/.test(value);
                  return (
                    isEmail ||
                    isPhoneNumber ||
                    "شماره تلفن یا ایمیل خود را درست وارد کنید"
                  );
                },
              },
            }}
          />
          <InputField
            id="password"
            label="رمز عبور"
            type="password"
            register={register}
            validationRules={{
              required: "رمز عبور را وارد کنید",
              minLength: {
                value: 8,
                message: "رمز عبور دارای حداقل 8 کارکتر است",
              },
            }}
          />
          <span className="mt-[-8px] cursor-pointer text-xs underline underline-offset-4">
            رمز عبور خود را فراموش کردید؟
          </span>
          <Button
            type="submit"
            variation="primary"
            additionalStyles="w-full mt-2"
          >
            ورود
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
