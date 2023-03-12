import { getSeller } from "../apis/post-api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import usePost from "../hooks/usePost";

export default function SellerPage() {
  const [arrSeller, setArrSeller] = useState([]);
  const fetch = async () => {
    const res = await getSeller();
    setArrSeller(res.data.getPost);
  };

  useEffect(() => {
    fetch();
  }, []);
  console.log(arrSeller);
  const { setCurrentPost } = usePost();
  return (
    <>
      <div className="w-[100vw] overflow-auto flex flex-wrap justify-center">
        {arrSeller.map((item, index) => (
          /** เอา item ที่ .map มา */
          <div className=" w-[40%] m-[10px] flex justify-center">
            <Link key={index} to={`sellerPost/${item.id}`} onClick={() => setCurrentPost(item)}>
              <img src={item.posterImage} alt="sellerPoster" className=""></img>
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
