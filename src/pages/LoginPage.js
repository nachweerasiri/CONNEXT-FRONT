import Logo from "../assets/icons/logo.svg";
import LoginForm from "../features/auth/LoginForm";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <>
            <div className="container-mobile">
                <div className="grid justify-items-stretch h-[35vh]">
                    <div className="flex justify-self-center justify-between w-10/12 items-center">
                        <img
                            src={Logo}
                            className="mx-auto"
                            alt="logo"
                            // height="106"
                        />
                    </div>
                    <h1 className="text-white ">Welcome to Connext</h1>
                    <h2 className="text-white ">Log in to continue</h2>
                </div>
            </div>

            <div className="grid justify-items-stretch h-[65vh]">
                <LoginForm />
                <hr className="hr-sm" />
                <div className="text-white text-center tw-py-2.5">
                    <Link className="navbar-brand" to="/register">
                        <button
                            className="bg-seller btn fw-bold btn-green rounded-3xl h-12"
                            type="button"
                        >
                            Create new account
                        </button>
                    </Link>
                </div>
            </div>
            <div className="mt-4 text-center"></div>
        </>
    );
}
