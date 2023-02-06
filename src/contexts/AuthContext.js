const { createContext } = require("react");

export const AuthContext = createContext();

// ContextProvider เอาไว้ส่งค่าอะไรสักอย่างนึงไปเข้าไปใน
// Context object หรือ AuthContext โดยการส่ง value เข้าไป
// ใช้เพราะอะไร เพราะว่า ข้อมูลที่ใน AuthContext มันใช้ได้หลาย Components
export default function AuthContextProvider({ children }) {
    return (
        <AuthContext.Provider value={"Auth Context"}>
            {children}
        </AuthContext.Provider>
    );
}
