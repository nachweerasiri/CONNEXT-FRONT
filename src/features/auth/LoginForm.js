import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
/** อาจจะต้องแก้ Input เป็นของ login มันเองเลย */
import Input from "../../components/Input";
import validateLogin from "../../validators/validate-login";
import * as authApi from "../../apis/auth-api";
import useLoading from "../../hooks/useLoading";
import Background from "../../components/background/Background";

// const initialInput = {
//     yourEmail: "",
//     newPassword: "",
// };

export default function LoginForm() {
  /** ใช้ State */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const { login } = useAuth();
  /** destructuring */
  const { startLoading, stopLoading } = useLoading();

  // // ใน {} คือ function ที่เอาไว้อัพเดท state
  // const handleChangeInput = e => {
  // setInput({ ...input, [e.target.name]: e.target.value });
  // };

  /** Submit */
  const handleSubmitForm = async (e) => {
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
    <>
      <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmitForm}>
        <div className="">
          <Input
            placeholder="Your Email"
            name="yourEmail"
            value={email.yourEmail}
            onChange={(e) => setEmail(e.target.value)}
            error={error.yourEmail}
          />
        </div>
        <div className="">
          <Input
            type="password"
            placeholder="Password"
            name="newPassword"
            value={password.newPassword}
            onChange={(e) => setPassword(e.target.value)}
            error={error.newPassword}
          />
        </div>
        <div className=" flex text-white text-center font-semibold">
          <button className="flex grow justify-around bg-gradient-to-r from-[#AE3A68] to-[#460EA2] p-3 rounded-full">
            Log In
          </button>
        </div>
      </form>
      <Background />
    </>
  );
}
