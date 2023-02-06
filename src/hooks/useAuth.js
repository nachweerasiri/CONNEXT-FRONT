// custom HOOK

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

// Function ที่ใช้ตัว AuthContext
export default function useAuth() {
    return useContext(AuthContext);
}
