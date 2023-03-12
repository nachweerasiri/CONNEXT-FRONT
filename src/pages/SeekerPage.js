import { getSeeker } from "../apis/post-api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import usePost from "../hooks/usePost";

export default function SeekerPage() {
  const [arrSeeker, setArrSeeker] = useState([]);
  /** คือการ fetch api ข้อมูลจาก backend มาไว้ที่ res แล้วสุดท้ายเอา state setArrSeeker ไป .map */
  const fetch = async () => {
    const res = await getSeeker();
    setArrSeeker(res.data.getPost);
  };

  useEffect(() => {
    fetch();
  }, []);
  console.log(arrSeeker);
  const { setCurrentPost } = usePost();
  return (
    <>
      <div className="w-[100vw] overflow-auto flex flex-wrap justify-center">
        {arrSeeker.map((item, index) => (
          /** เอา item ที่ .map มา */
          <div className=" w-[40%] m-[10px] flex justify-center">
            <Link key={index} to={`seekerPost/${item.id}`} onClick={() => setCurrentPost(item)}>
              <img src={item.posterImage} alt="seekerPoster" className="" />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex items-center px-7 bottom-8 fixed w-full z-40">
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
    </>
  );
}
