import Logo from "../assets/icons/logo.svg";
import RegisterForm from "../features/auth/RegisterForm";
export default function RegisAndLogin() {
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
                </div>
                <h1 className="text-white">Sign Up</h1>

                <div>
                    <div className="grid justify-items-stretch h-[65vh]">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </>
    );
}
