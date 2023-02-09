import ProfilePicBig from "../assets/icons/ProfilePicBig.png";
import AddTicketBig from "../assets/icons/AddTicketBig.png";
import Logout from "../assets/icons/Logout.png";
import UserName from "../assets/icons/UserName.png";
import { Link } from "react-router-dom";
// Function ที่ใช้ตัว AuthContext
import useAuth from "../hooks/useAuth";

export default function LayOutProfileHistory() {
    const { logout } = useAuth();
    return (
        <>
            <div className="container-mobile">
                <div className="grid justify-items-stretch h-[20vh] py-5">
                    <div className="flex justify-self-center justify-between w-10/12 items-center">
                        <div>
                            <img
                                src={ProfilePicBig}
                                className="mx-auto"
                                alt="ProfilePicBig"
                                height="106"
                            />
                        </div>
                        <div>
                            <img
                                src={UserName}
                                className="mx-auto"
                                alt="UserName"
                                height="106"
                                width="111"
                            />
                            <Link className="navbar-brand" to="/AddticketPage">
                                <img
                                    src={AddTicketBig}
                                    className="mx-auto"
                                    alt="AddTicketBig"
                                    height="106"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid justify-items-stretch h-[5vh]">
                    <div className="flex justify-self-center items-center">
                        <div className="bg-seller text-white rounded-l-3xl text-xl">
                            <Link className="navbar-brand" to="/profile">
                                <button>My Posts</button>
                            </Link>
                        </div>
                        <div className="bg-seeker text-white rounded-r-3xl text-xl">
                            <Link className="navbar-brand" to="/history">
                                <button>History</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid justify-items-stretch h-[55vh]">
                    <div className="flex justify-self-center justify-between w-10/12">
                        <div className="bg-black w-full text-white rounded-3xl">
                            body
                        </div>
                    </div>
                </div>
                <div className="grid justify-items-stretch h-[10vh]">
                    <div className="flex justify-self-center items-center">
                        <img
                            src={Logout}
                            className="h-20 w-21"
                            alt="Logout"
                            height="106"
                            onClick={logout}
                        />
                    </div>
                </div>
                <div className="grid justify-items-stretch h-[10vh]">
                    <div className="flex justify-self-center items-center">
                        <div className="bg-seller text-white rounded-l-3xl text-xl">
                            <Link className="navbar-brand" to="/seeker">
                                <button>Seeker</button>
                            </Link>
                        </div>
                        <div className="bg-seeker text-white rounded-r-3xl text-xl">
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
