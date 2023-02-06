// component ที่ทำหน้าที่ config Rounter ทั้งหมด

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SellerPage from "../pages/SellerPage";
import ProfilePage from "../pages/ProfilePage";
import AddTicketPage from "../pages/AddTicketPage";
import SeekerPage from "../pages/SeekerPage";
import SeekerPostPage from "../pages/SeekerPostPage";
import SellerPostPage from "../pages/SellerPostPage";
import TradePage from "../pages/TradePage";
import HistoryPage from "../pages/HistoryPage";
import TradeHistoryPage from "../pages/TradeHistoryPage";

// Function ที่เอาไว้ทำหน้าที่ config router, element คือ map ไปยัง <.../>
const router = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/", element: <SellerPage /> },
    { path: "/profile", element: <ProfilePage /> },
    { path: "/addticket", element: <AddTicketPage /> },
    { path: "/seeker", element: <SeekerPage /> },
    { path: "/seller", element: <SellerPage /> },
    { path: "/seekerpost", element: <SeekerPostPage /> },
    { path: "/sellerpost", element: <SellerPostPage /> },
    { path: "/trade", element: <TradePage /> },
    { path: "/history", element: <HistoryPage /> },
    { path: "/tradehistory", element: <TradeHistoryPage /> },
]);

export default function Router() {
    return <RouterProvider router={router} />;
    // router={router} คือ props ที่ถูกส่งมา
}
