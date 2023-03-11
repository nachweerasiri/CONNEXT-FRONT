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
      <div className="w-[100vw] flex flex-wrap justify-center">
        {arrSeeker.map((item, index) => (
          /** เอา item ที่ .map มา */
          <div className=" w-[40%] m-[10px]">
            <Link key={index} to={`seekerPost/${item.id}`} onClick={() => setCurrentPost(item)}>
              <img src={item.posterImage} alt="seekerPoster" className="" />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
