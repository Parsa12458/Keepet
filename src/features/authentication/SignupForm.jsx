import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";

function SignupForm() {
  return (
    <div className="flex w-1/2 max-w-[800px] overflow-hidden rounded">
      <div className="w-1/2 bg-paleGreen px-10 py-12 text-brown">
        <h1 className="text-center text-3xl font-bold">ثبت نام</h1>
        <form className="mt-8 flex flex-col gap-5">
          <InputField id="fullName" label="نام و نام خانوادگی" type="text" />
          <InputField id="email" label="ایمیل" type="email" />
          <InputField id="phoneNumber" label="شماره تلفن" type="tel" />
          <InputField id="password" label="رمز عبور" type="password" />
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
