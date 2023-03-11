import Logo from "../assets/icons/logo.svg";
import RegisterForm from "../features/auth/RegisterForm";
export default function RegisAndLogin() {
  return (
    <>
      <div className="m-20 flex flex-col gap-7">
        <div className="flex flex-col items-center">
          <div className="flex justify-self-center justify-between w-10/12 items-center">
            <img src={Logo} className="mx-auto" alt="logo" />
          </div>
        </div>
        <h1 className="text-white">Sign Up</h1>

        <div>
          <div className="flex flex-col gap-4">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
}
