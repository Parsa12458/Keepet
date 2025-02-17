import LoginForm from "../features/authentication/LoginForm";
import Header from "../ui/Header";

function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col dark:bg-darkBrown">
      <Header />
      <div className="flex flex-grow items-center justify-center pb-16">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
