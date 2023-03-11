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
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";
import ProtectRoute from "../features/auth/ProtectedRoute";
import LayOutProAddFooter from "../template/LayOutProAddFooter";

// Function ที่เอาไว้ทำหน้าที่ config router, element คือ map ไปยัง <.../>
const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    )
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/",
    element: (
      <ProtectRoute>
        <ProfilePage />
      </ProtectRoute>
    )
  },
  {
    path: "/profile",
    element: (
      <ProtectRoute>
        <ProfilePage />
      </ProtectRoute>
    )
  },
  // {
  //     path: "/addticketpage",
  //     element: (
  //         <ProtectRoute>
  //             <AddTicketPage />
  //         </ProtectRoute>
  //     ),
  // },

  ////////////////////////////////////////////////////////
  {
    path: "/",
    element: (
      <ProtectRoute>
        <LayOutProAddFooter />
      </ProtectRoute>
    ),
    children: [
      { path: "seeker", element: <SeekerPage /> },
      { path: "seller", element: <SellerPage /> },
      { path: "seeker/seekerPost/:postId", element: <SeekerPostPage /> },
      { path: "seller/sellerPost/:postId", element: <SellerPostPage /> }
    ]
  },
  {
    path: "/",
    element: (
      <ProtectRoute>
        <LayOutProAddFooter isMain={false} />
      </ProtectRoute>
    ),
    children: [{ path: "addticketpage", element: <AddTicketPage /> }]
  },
  // {
  //     path: "/seeker",
  //     element: (
  //         <ProtectRoute>
  //             <SeekerPage />
  //         </ProtectRoute>
  //     ),
  // },
  // {
  //     path: "/seller",
  //     element: (
  //         <ProtectRoute>
  //             <SellerPage />
  //         </ProtectRoute>
  //     ),
  // },
  // {
  //     path: "/seekerpost",
  //     element: (
  //         <ProtectRoute>
  //             <SeekerPostPage />
  //         </ProtectRoute>
  //     ),
  // },
  // {
  //     path: "/sellerpost",
  //     element: (
  //         <ProtectRoute>
  //             <SellerPostPage />
  //         </ProtectRoute>
  //     ),
  // },
  {
    path: "/trade",
    element: (
      <ProtectRoute>
        <TradePage />
      </ProtectRoute>
    )
  },
  {
    path: "/history",
    element: (
      <ProtectRoute>
        <HistoryPage />
      </ProtectRoute>
    )
  },
  {
    path: "/tradehistory",
    element: (
      <ProtectRoute>
        <TradeHistoryPage />
      </ProtectRoute>
    )
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
  // router={router} คือ props ที่ถูกส่งมา
}
