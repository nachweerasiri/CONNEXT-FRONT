import Logo from "../assets/icons/logo.svg";
import VerticalSpace from "../components/VerticalSpace";
import RegisterForm from "../features/auth/RegisterForm";
export default function RegisAndLogin() {
  return (
    <>
      <VerticalSpace />
      <VerticalSpace />
      <VerticalSpace />
      <VerticalSpace />
      <div className="m-20 flex flex-col gap-7">
        <div className="flex flex-col items-center">
          <div className="flex justify-self-center justify-between w-10/12 items-center">
            <img src={Logo} className="mx-auto" alt="logo" />
          </div>
        </div>
        <div className="text-white text-lg font-bold">Sign Up</div>

        <div>
          <div className="flex flex-col gap-4">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
}
