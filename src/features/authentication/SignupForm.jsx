import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function SignupForm() {
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
      <div className="w-1/2 bg-paleGreen px-10 py-12 text-brown">
        <h1 className="text-center text-3xl font-bold">ثبت نام</h1>
        <form
          className="mt-8 flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <InputField
            id="fullName"
            label="نام و نام خانوادگی"
            type="text"
            register={register}
            validationRules={{ required: "نام و نام خانوادگی را وارد کنید" }}
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
          />
          <InputField
            id="password"
            label="رمز عبور"
            type="password"
            register={register}
            validationRules={{
              required: "رمز عبور مورد نظر خود را وارد کنید",
              minLength: {
                value: 8,
                message: "رمز عبور باید حداقل دارای 8 کارکتر باشد",
              },
            }}
          />
          <Button
            type="submit"
            variation="primary"
            additionalStyles="w-full mt-3"
          >
            تایید
          </Button>
        </form>
      </div>
      <div className="relative flex w-1/2 items-center justify-center px-6 text-center text-3xl font-normal">
        <img
          src="/images/blackcat-yellow-chair.jpg"
          alt="Cat background image"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 h-full w-full bg-brown/80"></div>
        <p className="relative text-white">
          اگر حساب کاربری دارید
          <Link
            to="/login"
            className="block cursor-pointer underline underline-offset-8"
          >
            وارد شوید
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
