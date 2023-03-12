// import ProfilePicBig from "../assets/icons/ProfilePicBig.png";
import myPost from "../assets/icons/myPost.png";
import AddTicketBig from "../assets/icons/AddTicketBig.png";
import Logout from "../assets/icons/Logout.png";
// import UserName from "../assets/icons/UserName.png";
import { Link } from "react-router-dom";
// import useLoading from "../hooks/useLoading";
import { useEffect, useState } from "react";
import * as userApi from "../apis/user-api";

/** ตัวนี้ทำให้สามารถใช้ข้อมูลของ user ได้จาก useContext */
// Function ที่ใช้ตัว AuthContext
import useAuth from "../hooks/useAuth";
import Avatar from "../components/Avatar";
import Background from "../components/background/Background";

export default function LayOutProfileHistory({ onSuccess, updateProfileUser }) {
  const { logout, authenticatedUser } = useAuth();

  const [file, setFile] = useState(null);

  // const handleChangeAvatar = async () => {
  //     const formData = new FormData();
  //     formData.append('profileImage', file);
  //     await userApi.updateProfile(formData)
  // }

  // const { startLoading, stopLoading } = useLoading();
  const onChangeProfileImage = async (file) => {
    if (file) {
      const formData = new FormData();
      formData.append("profileImage", file);
      await userApi.updateProfile(formData);
    }
  };
  useEffect(() => {
    // const handleChangeAvatar = async () => {
    // updateProfile(res.data);
    // updateProfileUser(res.data);
    // };
    // handleChangeAvatar();
  }, [file]);

  // const handleChangeAvatar = async () => {
  //     startLoading();
  //     const formData = new FormData();
  //     formData.append("profileImage", file);
  //     const res = await userApi.updateProfile(formData);
  //     updateProfile(res.data);
  //     updateProfileUser(res.data);
  //     stopLoading();
  //     setFile(null);
  //     onSuccess();
  // };

  return (
    <>
      <div className="grid justify-items-stretch h-[20vh] py-5">
        <div className="flex justify-self-center justify-between w-10/12 items-center">
          <div>
            <input
              type="file"
              className="hidden"
              id="chooseImg"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                  onChangeProfileImage(e.target.files[0]);
                }
              }}
              multiple
            />
            <div onClick={() => document.getElementById("chooseImg").click()}>
              <Avatar
                src={file ? URL.createObjectURL(file) : authenticatedUser.profileImage}
                // src={authenticatedUser.profileImage}
                size="130"
                className="mx-auto"
                height="106"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-4xl font-extrabold">{authenticatedUser.userName}</span>

            <Link className="navbar-brand" to="/AddticketPage">
              <img src={AddTicketBig} className="mx-auto" alt="AddTicketBig" height="106" />
            </Link>
          </div>
        </div>
      </div>
      {/* My post and History */}
      <div className="flex items-center h-[13vh] px-7 fixed w-full z-40">
        <div className="flex grow justify-around bg-gradient-to-r from-[#460EA2] to-[#AE3A68] p-3 rounded-full">
          <div>
            <Link className="navbar-brand" to="/profile">
              <button className="text-white font-semibold text-lg">My posts</button>
            </Link>
          </div>
          <div>
            <Link className="navbar-brand" to="/profile">
              <button className="text-white font-semibold text-lg">History</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid justify-items-stretch h-[57vh]">
        <div className="flex justify-self-center justify-between w-10/12">
          <div className=" w-full text-white rounded-3xl">{/* body */}</div>
        </div>
      </div>
      <div className="grid justify-items-stretch h-[10vh]">
        <div className="flex justify-self-center items-center">
          <img src={Logout} className="h-20 w-21" alt="Logout" height="106" onClick={logout} />
        </div>
      </div>
      {/* <div className="flex items-center h-[13vh] px-7 fixed w-full shadow-lg z-40">
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
      </div> */}
      <Background />
    </>
  );
}
