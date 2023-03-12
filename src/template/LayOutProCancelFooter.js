// import ProfilePicSmall from "../assets/icons/ProfilePicSmall.png";
import CancelButton from "../assets/icons/CancelButton.png";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import Avatar from "../components/Avatar";
import Background from "../components/background/Background";

export default function LayOutProCancelFooter() {
  const {
    authenticatedUser: { profileImage }
  } = useAuth();

  const navigate = useNavigate();
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
          <div className="text-white font-semibold text-2xl">TRADE</div>
          <div onClick={() => navigate(-1)}>
            <img src={CancelButton} className="mx-auto" alt="CancelButton" height="106" />
          </div>
        </div>
      </div>
      <div className="grid justify-items-stretch h-[72vh]">
        <div className="flex justify-self-center justify-between w-10/12"></div>
      </div>
      <div className="flex items-center h-[13vh] px-7 fixed w-full shadow-lg z-40">
        <div className="flex grow justify-around bg-gradient-to-r from-[#460EA2] to-[#AE3A68] p-3 rounded-full">
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
