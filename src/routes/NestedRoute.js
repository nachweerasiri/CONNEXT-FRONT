// // component ที่ทำหน้าที่ config Rounter ทั้งหมด

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import LoginPage from "../pages/LoginPage";
// import RegisterPage from "../pages/RegisterPage";
// import SellerPage from "../pages/SellerPage";
// import ProfilePage from "../pages/ProfilePage";
// import AddTicketPage from "../pages/AddTicketPage";
// import SeekerPage from "../pages/SeekerPage";
// import SeekerPostPage from "../pages/SeekerPostPage";
// import SellerPostPage from "../pages/SellerPostPage";
// import TradePage from "../pages/TradePage";
// import HistoryPage from "../pages/HistoryPage";
// import TradeHistoryPage from "../pages/TradeHistoryPage";
// import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";
// import ProtectRoute from "../features/auth/ProtectedRoute";
// import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
// import ProfileFooterLayout from "../layouts/ProfileFooterLayout";

// // Function ที่เอาไว้ทำหน้าที่ config router, element คือ map ไปยัง <.../>
// const router = createBrowserRouter([
//     {
//         path: "/login",
//         element: (
//             <RedirectIfAuthenticate>
//                 <LoginPage />
//             </RedirectIfAuthenticate>
//         ),
//     },
//     {
//         path: "/register",
//         element: <RegisterPage />,
//     },

//     /** Nested Route Profile and History*/
//     /** OUTLET คือ
//      <ProtectRoute>
//        <ProfilePage />
//      </ProtectRoute>
//     */
//     {
//         /** children ทุกตัว จะถูกครอบด้วย <ProtectRoute>children</ProtectRoute>*/
//         element: (
//             <ProtectRoute>
//                 <ProfileFooterLayout />,
//             </ProtectRoute>
//         ),
//         /** array ของ Nested Route */
//         children: [
//             {
//                 path: "/profile",
//                 element: <ProfilePage />,
//             },
//             {
//                 path: "/history",
//                 element: <HistoryPage />,
//             },
//         ],
//     },

//     /** Nested Route หน้าอื่นๆ ที่มี Header และ Footer เหมือนกัน */
//     {
//         element: (
//             <ProtectRoute>
//                 <HeaderFooterLayout />,
//             </ProtectRoute>
//         ),
//         /** array ของ Nested Route */
//         children: [
//             {
//                 path: "/",
//                 element: <SellerPage />,
//             },
//             {
//                 path: "/addticket",
//                 element: <AddTicketPage />,
//             },
//             {
//                 path: "/seeker",
//                 element: <SeekerPage />,
//             },
//             {
//                 path: "/seller",
//                 element: <SellerPage />,
//             },
//             {
//                 path: "/seekerpost",
//                 element: <SeekerPostPage />,
//             },
//             {
//                 path: "/sellerpost",
//                 element: <SellerPostPage />,
//             },
//             {
//                 path: "/trade",
//                 element: <TradePage />,
//             },

//             {
//                 path: "/tradehistory",
//                 element: <TradeHistoryPage />,
//             },
//         ],
//     },
// ]);

// export default function Router() {
//     return <RouterProvider router={router} />;
//     // router={router} คือ props ที่ถูกส่งมา
// }
