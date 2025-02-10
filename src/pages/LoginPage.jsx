import LoginForm from "../features/authentication/LoginForm";
import Header from "../ui/Header";

function LoginPage() {
  return (
    <div className="dark:bg-darkBrown flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-grow items-center justify-center pb-16">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
