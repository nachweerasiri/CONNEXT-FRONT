import ProfilePicSmall from "../assets/icons/ProfilePicSmall.png";
import CancelButton from "../assets/icons/CancelButton.png";
import { Link } from "react-router-dom";

export default function LayOutProCancelFooter() {
    return (
        <>
            <div className="container-mobile">
                <div className="grid justify-items-stretch h-[15vh]">
                    <div className="flex justify-self-center justify-between w-10/12 items-center">
                        <div>
                            <Link className="navbar-brand" to="/profile">
                                <img
                                    src={ProfilePicSmall}
                                    className="mx-auto"
                                    alt="ProfilePicSmall"
                                    height="106"
                                />
                            </Link>
                        </div>
                        <div className="text-white">Title</div>
                        <div>
                            <img
                                src={CancelButton}
                                className="mx-auto"
                                alt="CancelButton"
                                height="106"
                            />
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
