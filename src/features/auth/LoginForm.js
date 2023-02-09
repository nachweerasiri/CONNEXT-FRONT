import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
/** อาจจะต้องแก้ Input เป็นของ login มันเองเลย */
import Input from "../../components/Input";
import validateLogin from "../../validators/validate-login";
import * as authApi from "../../apis/auth-api";
import useLoading from "../../hooks/useLoading";

const initialInput = {
    yourEmail: "",
    newPassword: "",
};

export default function LoginForm() {
    /** ใช้ State */
    const [email, setEmail] = useState(initialInput);
    const [password, setPassword] = useState(initialInput);
    const [error, setError] = useState({});

    const { login } = useAuth();
    /** destructuring */
    const { startLoading, stopLoading } = useLoading();

    // // ใน {} คือ function ที่เอาไว้อัพเดท state
    // const handleChangeInput = e => {
    // setInput({ ...input, [e.target.name]: e.target.value });
    // };

    /** Submit */
    const handleSubmitForm = async e => {
        try {
            e.preventDefault();
            await login(email, password);
            toast.success("Success Login!");
            const errorResult = validateLogin(email);
            // const errorResult = false;
            if (errorResult) {
                setError(errorResult);
            } else {
                setError({});
                startLoading();
                /** เรียกใช้ file auth-api.js ที่ import เข้ามา */
                await authApi.login(email);
                // setInput(initialInput);
                // onClose();
                // toast.success("Success Login!");
            }
            /** ถ้าเจอ error จะดักจับมาที่ตรงนี้ */
        } catch (err) {
            // err.response.data;
            toast.error(err.response?.data.message);
        } finally {
            stopLoading();
        }
    };

    return (
        <form
            className="d-flex flex-column gap-3 text-red-700"
            onSubmit={handleSubmitForm}
        >
            <div className="col-6">
                <Input
                    placeholder="Your Email"
                    name="yourEmail"
                    value={email.yourEmail}
                    onChange={e => setEmail(e.target.value)}
                    error={error.yourEmail}
                />
            </div>
            <div className="col-6">
                <Input
                    type="password"
                    placeholder="Password"
                    name="newPassword"
                    value={password.newPassword}
                    onChange={e => setPassword(e.target.value)}
                    error={error.newPassword}
                />
            </div>
            <div className="text-white text-center tw-py-2.5">
                <button className="bg-seller btn btn-primary w-100 fw-bold rounded-3xl h-12 text-4.5">
                    Log In
                </button>
            </div>
        </form>
    );
}
