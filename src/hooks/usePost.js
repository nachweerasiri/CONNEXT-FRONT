// custom HOOK

import { useContext } from "react";
import { PostContext } from "../contexts/postContext";

// Function ที่ใช้ตัว AuthContext
export default function usePost() {
    return useContext(PostContext);
}
