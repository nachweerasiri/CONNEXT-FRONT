// import ProfilePicBig from "../assets/icons/ProfilePicBig.png";
import AddTicketBig from "../assets/icons/AddTicketBig.png";
import Logout from "../assets/icons/Logout.png";
// import UserName from "../assets/icons/UserName.png";
import { Link } from "react-router-dom";
import { useState } from "react";

/** ตัวนี้ทำให้สามารถใช้ข้อมูลของ user ได้จาก useContext */
// Function ที่ใช้ตัว AuthContext
import useAuth from "../hooks/useAuth";
import Avatar from "../components/Avatar";

export default function LayOutProfileHistory() {
    const { logout, authenticatedUser } = useAuth();

    const [file, setFile] = useState(null);

    return (
        <>
            <div className="container-mobile">
                <div className="grid justify-items-stretch h-[20vh] py-5">
                    <div className="flex justify-self-center justify-between w-10/12 items-center">
                        <div>
                            <input
                                type="file"
                                className="hidden"
                                id="chooseImg"
                                accept="image/*"
                                onChange={e => {
                                    if (e.target.files[0]) {
                                        setFile(e.target.files[0]);
                                    }
                                }}
                                multiple
                            />
                            <div
                                onClick={() =>
                                    document.getElementById("chooseImg").click()
                                }
                            >
                                <Avatar
                                    src={
                                        file
                                            ? URL.createObjectURL(file)
                                            : authenticatedUser.profileImage
                                    }
                                    // src={authenticatedUser.profileImage}
                                    size="130"
                                    className="mx-auto"
                                    height="106"
                                />
                            </div>
                            {/* <img
                                src={ProfilePicBig}
                                className="mx-auto"
                                alt="ProfilePicBig"
                                height="106"
                            /> */}
                        </div>
                        <div>
                            <span className="text-white text-xl font-extrabold">
                                {authenticatedUser.userName}
                            </span>
                            {/* <img
                                src={UserName}
                                className="mx-auto"
                                alt="UserName"
                                height="106"
                                width="111"
                            /> */}
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
                        <div className="bg-seller text-white rounded-l-3xl text-lg">
                            <Link className="navbar-brand" to="/profile">
                                <button>My Posts</button>
                            </Link>
                        </div>
                        <div className="bg-seeker text-white rounded-r-3xl text-lg">
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
