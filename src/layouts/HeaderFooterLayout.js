/** ทำให้ children ของ HeaderFooterLayout มัน RENDER*/
/** Outlet หมายถึง Element ที่เป็นส่วน children ของ HeaderFooterLayout */
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

export default function HeaderFooterLayout() {
    return (
        <>
            <Header />
            <div className="min-vh-100 tw-pt-14">
                <Outlet />
            </div>
        </>
    );
}
