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
            {arrSeller.map((item, index) => (
                /** เอา item ที่ .map มา */
                <Link
                    key={index}
                    to={`sellerPost/${item.id}`}
                    onClick={() => setCurrentPost(item)}
                >
                    <img src={item.posterImage} alt="sellerPoster"></img>
                </Link>
            ))}
        </>
    );
}
