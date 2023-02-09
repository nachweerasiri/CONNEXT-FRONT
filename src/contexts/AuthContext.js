/** ข้อมูลของ user ที่ login */

import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import * as authApi from "../apis/auth-api";
import {
    getAccessToken,
    removeAccessToken,
    setAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

// ContextProvider เอาไว้ส่งค่าอะไรสักอย่างนึงไปเข้าไปใน
// Context object หรือ AuthContext โดยการส่ง value เข้าไป
// ใช้เพราะอะไร เพราะว่า ข้อมูลที่ใน AuthContext มันใช้ได้หลาย Components
export default function AuthContextProvider({ children }) {
    /** STATE ที่ทำให้รู้ว่า Login อยู่ หรือไม่ได้ Login อยู่ */
    /** authenticatedUser = user ที่ login ไปแล้ว // เก็บข้อมูลผู้ใช้งานที่มีการ login อยู่ */
    const [authenticatedUser, setAuthenticatedUser] = useState(
        getAccessToken() ? true : null // ถ้า getAccessToken มีค่า() ก็จะเป็น true ถ้าไม่ก็เป็น null /** true คือ เข้าไป /login ไม่ได้ ถ้า user login อยู่ / null คือ ถ้าไม่ login ก็จะเข้าไป /login ได้ */
    );

    /* ข้อมูล user ที่ authenticate user ที่ login อยู่ */
    useEffect(() => {
        const fetchAuthUser = async () => {
            try {
                const res = await authApi.getMe();
                setAuthenticatedUser(res.data.user);
            } catch (err) {
                removeAccessToken();
            }
            /** ไปดูใน fakebook 25-01-2023 บ่าย  */
        };
        fetchAuthUser();
    }, []);

    /** Function สำหรับการ login */
    const login = async (email, password) => {
        const res = await authApi.login({ email, password });
        /** ถ้าเรา Login สำเร็จ จะ*/
        setAccessToken(res.data.accessToken); // ป้อนเข้าไปใน local storage
        setAuthenticatedUser(jwtDecode(res.data.accessToken)); // เพื่อให้รู้ว่า user ทำการ login อยู่
    };

    /** Function LOGOUT ทำงานด้วยการ remove access token */
    const logout = () => {
        removeAccessToken();
        setAuthenticatedUser(null);
    };

    return (
        <AuthContext.Provider value={{ authenticatedUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
