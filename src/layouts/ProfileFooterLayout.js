/** ทำให้ children ของ ProfileFooterLayout มัน RENDER*/
/** Outlet หมายถึง Element ที่เป็นส่วน children ของ ProfileFooterLayout */
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

export default function ProfileFooterLayout() {
    return (
        <>
            <Header />
            <nav>Profile</nav>;
            <Outlet />
        </>
    );
}
