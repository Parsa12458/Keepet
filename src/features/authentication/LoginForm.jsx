import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";

function LoginForm() {
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
        <form className="mt-8 flex flex-col gap-5">
          <InputField id="fullName" label="شماره تلفن یا ایمیل" type="text" />
          <InputField id="password" label="رمز عبور" type="password" />
          <span className="mt-[-8px] cursor-pointer text-xs underline underline-offset-4">
            رمز عبور خود را فراموش کردید؟
          </span>
          <Button
            type="submit"
            variation="primary"
            additionalStyles="w-full mt-2"
          >
            تایید
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
