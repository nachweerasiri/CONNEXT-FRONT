import ProfilePicSmall from "../../assets/icons/ProfilePicSmall.png";
import AddTicket from "../../assets/icons/AddTicket.svg";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="container-mobile">
                <div className="grid justify-items-stretch h-[15vh]">
                    <div className="flex justify-self-center justify-between w-10/12 items-center">
                        <Link className="navbar-brand" to="/profile">
                            <img
                                src={ProfilePicSmall}
                                className="mx-auto"
                                alt="ProfilePicSmall"
                                height="106"
                            />
                        </Link>

                        <div>
                            <h1>Title</h1>
                        </div>
                        <div className="tw-mb-5">
                            <Link className="navbar-brand" to="/AddticketPage">
                                <img
                                    src={AddTicket}
                                    className="mx-auto"
                                    alt="AddTicket"
                                    height="106"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
