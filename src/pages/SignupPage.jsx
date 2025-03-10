import SignupForm from "../features/authentication/SignupForm";
import Header from "../ui/Header";

function Signup() {
  return (
    <div className="flex min-h-screen flex-col dark:bg-darkBrown">
      <Header />
      <div className="flex flex-grow items-center justify-center pb-16">
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;
