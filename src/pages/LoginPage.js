import Logo from "../assets/icons/logo.svg";
import LoginForm from "../features/auth/LoginForm";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col m-20 gap-4">
        <div className="grid justify-items-stretch gap-4">
          <div className="flex justify-self-center justify-between w-10/12 items-center">
            <img src={Logo} className="mx-auto" alt="logo" />
          </div>
          <h1 className="text-white ">Welcome to Connext</h1>
          <h2 className="text-white ">Log in to continue</h2>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <LoginForm />

          <Link className="navbar-brand" to="/register">
            <div className="text-white text-center ">
              <button
                className="flex grow font-semibold justify-around bg-gradient-to-r from-[#460EA2] to-[#AE3A68] p-3 rounded-full"
                type="button"
              >
                Create new account
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
