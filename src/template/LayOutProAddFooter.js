// import ProfilePicSmall from "../assets/icons/ProfilePicSmall.png";
import AddTicket from "../assets/icons/AddTicket.svg";
import CancelButton from "../assets/icons/CancelButton.png";
import { Link, useLocation } from "react-router-dom";

import { Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import Avatar from "../components/Avatar";
import Background from "../components/background/Background";

export default function LayOutProAddFooter({ isMain = true }) {
  const location = useLocation().pathname.split("/")[1];
  let pageName = location;
  if (location === "AddticketPage") {
    pageName = "ADD TICKET";
  } else if (location === "seeker") {
    pageName = "SEEKER";
  } else if (location === "seller") {
    pageName = "SELLER";
  } else if (location === "seekerPost") {
    pageName = "SEEKER";
  } else if (location === "sellerPost") {
    pageName = "SELLER";
  }
  const {
    authenticatedUser: { profileImage }
  } = useAuth();

  return (
    <>
      <div className="grid justify-items-stretch h-[15vh]">
        <div className="flex justify-self-center justify-between w-10/12 items-center">
          <div>
            <Link className="navbar-brand" to="/profile">
              <Avatar src={profileImage} size="50" className="mx-auto" height="106" />
              {/* <img
                                    src={ProfilePicSmall}
                                    className="mx-auto"
                                    alt="ProfilePicSmall"
                                    height="106"
                                /> */}
            </Link>
          </div>
          <div className="text-white font-semibold text-2xl">{pageName}</div>
          <div>
            <Link className="navbar-brand" to="/AddticketPage">
              {isMain ? (
                <img src={AddTicket} className="mx-auto" alt="AddTicket" height="106" />
              ) : (
                <Link className="navbar-brand" to="/profile">
                  <img src={CancelButton} className="mx-auto" alt="CancelButton" height="106" />
                </Link>
              )}
            </Link>
          </div>
        </div>
      </div>
      {/* header */}
      <div className="grid justify-items-stretch h-[72vh]">
        <Outlet />
        {/* <div className="flex justify-self-center justify-between w-10/12">
                        <div className="bg-black w-full text-white rounded-3xl">
                            body
                        </div>
                    </div> */}
      </div>
      {/* footer */}
      <div className="flex items-center h-[13vh] px-7 fixed w-full z-40">
        <div className="flex grow justify-around bg-gradient-to-r from-[#460EA2] to-[#AE3A68] p-3 rounded-full  shadow-lg">
          <div>
            <Link className="navbar-brand" to="/seeker">
              <button className="text-white font-semibold text-lg">Seeker</button>
            </Link>
          </div>
          <div>
            <Link className="navbar-brand" to="/seller">
              <button className="text-white font-semibold text-lg">Seller</button>
            </Link>
          </div>
        </div>
      </div>
      <Background />
    </>
  );
}
