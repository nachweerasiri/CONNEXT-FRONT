import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function ProtectRoute({ children }) {
    const { authenticatedUser } = useAuth();
    if (!authenticatedUser) {
        /** ถ้าคุณยังไม่ได้ Login แล้วพยามเข้าหน้าอื่น จะถูกให้ไปที่ path /login */
        return <Navigate to={"/login"} />;
    }
    return children;
}
