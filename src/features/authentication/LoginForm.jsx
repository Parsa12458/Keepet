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
    <div className="flex w-1/2 max-w-[800px] overflow-hidden rounded">
      <div className="relative flex w-1/2 items-center justify-center px-6 text-center text-3xl font-normal">
        <img
          src="/images/cat-looking-outside.jpg"
          alt="Cat background image"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 h-full w-full bg-brown/80"></div>
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
      <div className="w-1/2 bg-paleGreen px-10 py-12 text-brown">
        <h1 className="text-center text-3xl font-bold">ورود</h1>
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
