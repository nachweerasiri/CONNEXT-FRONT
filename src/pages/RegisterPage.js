import Logo from "../assets/icons/logo.svg";
import RegisterForm from "../features/auth/RegisterForm";
export default function RegisterPage() {
    return (
        <div className="container-fluid flex-justify-center">
            <div className="mx-auto max-w-245">
                <div className="row">
                    <div className="col-12 col-lg-6 ps-xl-0 tw-pt-10 tw-pt-lg-41 tw-ps-lg-10">
                        <div className="text-center mx-auto text-lg-start max-w-100 max-w-lg-92 max-w-xl-125">
                            <div className="tw-mb-5">
                                <img
                                    src={Logo}
                                    className="mx-auto"
                                    alt="logo"
                                    height="106"
                                />
                            </div>
                            <h1 className="text-white fw-normal mb-0 px-3 px-lg-0 text-6 text-xl-7">
                                Sign Up
                            </h1>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 pe-xl-0 tw-mt-10 tw-pt-lg-23 tw-pe-lg-10">
                        <div className=" mx-auto  max-w-99">
                            <RegisterForm />
                        </div>
                        <div className="mt-4 text-center"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
