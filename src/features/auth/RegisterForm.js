import { useState } from "react";
import Input from "../../components/Input";
import validateRegister from "../../validators/validate-register";
import * as authApi from "../../apis/auth-api";

const initialInput = {
    userName: "",
    yourEmail: "",
    newPassword: "",
    confirmPassword: "",
};

export default function RegisterForm() {
    // ค่าเริ่มต้นของแต่ละ Input แทนด้วย initialInput
    const [input, setInput] = useState(initialInput);
    const [error, setError] = useState({});

    // ใน {} คือ function ที่เอาไว้อัพเดท state
    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmitForm = async e => {
        try {
            e.preventDefault();
            const errorResult = validateRegister(input);
            // const errorResult = false;
            if (errorResult) {
                setError(errorResult);
            } else {
                setError({});
                /** เรียกใช้ file auth-api.js ที่ import เข้ามา */
                await authApi.register(input);
            }
            /** ถ้าเจอ error จะดักจับมาที่ตรงนี้ */
        } catch (err) {}
    };

    return (
        <form className="d-flex flex-column gap-3" onSubmit={handleSubmitForm}>
            <div className="col-6">
                <Input
                    placeholder="User Name"
                    name="userName"
                    value={input.userName}
                    onChange={handleChangeInput}
                    error={error.userName}
                />
            </div>
            <div className="col-6">
                <Input
                    placeholder="Your Email"
                    name="yourEmail"
                    value={input.yourEmail}
                    onChange={handleChangeInput}
                    error={error.yourEmail}
                />
            </div>
            <div className="col-6">
                <Input
                    type="password"
                    placeholder="New Password"
                    name="newPassword"
                    value={input.newPassword}
                    onChange={handleChangeInput}
                    error={error.newPassword}
                />
            </div>
            <div className="col-6">
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={input.confirmPassword}
                    onChange={handleChangeInput}
                    error={error.confirmPassword}
                />
            </div>
            <div className="text-white text-center tw-py-2.5">
                <button className="btn btn-primary w-100 fw-bold rounded-md h-12 text-4.5">
                    Sign Up
                </button>
            </div>
        </form>
    );
}
