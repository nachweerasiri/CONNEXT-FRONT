/* หน้าที่ Redirect ให้ user ที่ loginไปแล้ว เวลาเสิร์ชไปที่ /login จะถูก redirect ไปที่ root path แทน หรือก็คือหน้า seller ของ connext */

import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

/** children ในที่นี้ก็คือ <LoginPage /> ใน file routes/Router */
export default function RedirectIfAuthenticate({ children }) {
    const { authenticatedUser } = useAuth();
    if (authenticatedUser) {
        /** ถ้าคุณ Login อยู่ แล้วพยามเข้าหน้า login จะถูกให้ไปที่ root path */
        return <Navigate to={"/"} />;
    }
    return children;
}
