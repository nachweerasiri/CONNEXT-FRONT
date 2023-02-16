import React from "react";
import { BiHomeAlt, BiSearch } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { Outlet, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Footer() {
    const { logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <Outlet />

            <div className="relative flex flex-row items-center justify-between">
                <nav>
                    <Link to="/cart-page">
                        <MdOutlineShoppingCart className="text-textColor text-2xl mt-5 mx-3 cursor-pointer" />

                        <div className="absolute -bottom-1 -left+3 mx-4 my-4  w-5 h-5 rounded-full bg-cartNumBg"></div>
                        <p className=" absolute -bottom-1 -left+1 mx-4 my-4 px-2 text-xs text-black font-semibold">
                            2
                        </p>
                    </Link>
                </nav>
                <div>
                    <BiHomeAlt className="text-textColor text-2xl mt-5 mx-3 cursor-pointer " />
                </div>
                <div>
                    <BiSearch className="text-textColor text-2xl mt-5 mx-3 cursor-pointer" />
                </div>
                <div onClick={handleLogout}>
                    <BsPerson className="text-textColor text-2xl mt-5 mx-3 cursor-pointer" />
                </div>
            </div>
        </>
    );
}
export default Footer;
