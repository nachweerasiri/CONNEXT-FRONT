// import ProfilePicSmall from "../assets/icons/ProfilePicSmall.png";
import AddTicket from "../assets/icons/AddTicket.svg";
import { Link } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import Avatar from "../components/Avatar";

export default function LayOutProAddFooter() {
    const {
        authenticatedUser: { profileImage },
    } = useAuth();
    return (
        <>
            <div className="container-mobile">
                <div className="grid justify-items-stretch h-[15vh]">
                    <div className="flex justify-self-center justify-between w-10/12 items-center">
                        <div>
                            <Link className="navbar-brand" to="/profile">
                                <Avatar
                                    src={profileImage}
                                    size="50"
                                    className="mx-auto"
                                    height="106"
                                />
                                {/* <img
                                    src={ProfilePicSmall}
                                    className="mx-auto"
                                    alt="ProfilePicSmall"
                                    height="106"
                                /> */}
                            </Link>
                        </div>
                        <div className="text-white">Title</div>
                        <div>
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
                <div className="grid justify-items-stretch h-[75vh]">
                    <div className="flex justify-self-center justify-between w-10/12">
                        <div className="bg-black w-full text-white rounded-3xl">
                            body
                        </div>
                    </div>
                </div>
                <div className="grid justify-items-stretch h-[10vh]">
                    <div className="flex justify-self-center items-center">
                        <div className="bg-seller text-white rounded-l-3xl text-lg">
                            <Link className="navbar-brand" to="/seeker">
                                <button>Seeker</button>
                            </Link>
                        </div>
                        <div className="bg-seeker text-white rounded-r-3xl text-lg">
                            <Link className="navbar-brand" to="/seller">
                                <button>Seller</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
