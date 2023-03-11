import { useState } from "react";
import { toast } from "react-toastify";
import Input from "../../components/Input";
// import * as authApi from "../../apis/auth-api";
// import useLoading from "../../hooks/useLoading";
import UploadPoster from "../../assets/icons/posterImage.png";

const initialInput = {
  topic: "",
  price: "",
  description: "",
  contact: ""
};

export default function Postform() {
  // ค่าเริ่มต้นของแต่ละ Input แทนด้วย initialInput
  const [input, setInput] = useState(initialInput);
  const [file, setFile] = useState(null);
  // const [error, setError] = useState({});

  // /** destructuring */
  // const { startLoading, stopLoading } = useLoading();

  // ใน {} คือ function ที่เอาไว้อัพเดท state
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    toast.success("Success add Ticket!");
  };

  return (
    <form>
      <div className="col-6">
        <Input
          placeholder="Topic"
          name="topic"
          value={input.topic}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="col-6">
        <Input
          placeholder="Price"
          name="price"
          value={input.price}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="col-6">
        <Input
          placeholder="Description"
          name="description"
          value={input.newPassword}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="col-6">
        <Input
          placeholder="Contact"
          name="contact"
          value={input.contact}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <input
          type="file"
          className="hidden"
          id="choose"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
          multiple
        />
        <div onClick={() => document.getElementById("chooseImg").click()}>
          <img
            src={file ? URL.createObjectURL(file) : <UploadPoster />}
            className="mx-auto"
            alt="posterImage"
            height="106"
          />
        </div>
      </div>
      <div className="text-white">
        <h1>For</h1>
      </div>
      <div className="grid justify-items-stretch">
        <div className="flex justify-self-center items-center">
          <div className="bg-seller text-white rounded-l-3xl text-lg">
            <button>Seeker</button>
          </div>
          <div className="bg-seeker text-white rounded-r-3xl text-lg">
            <button>Seller</button>
          </div>
        </div>
      </div>
    </form>
  );
}

/** ปุ่มอัพรูปโปสเตอร์ จากเทาๆ */
// function FileButton() {
//     return (
//         <div>
//             <input
//                 type="file"
//                 className="hidden"
//                 id="chooseImg"
//                 accept="image/*"
//                 onChange={e => {
//                     if (e.target.files[0]) {
//                         setFile(e.target.files[0]);
//                     }
//                 }}
//                 multiple
//             />
//             <div onClick={() => document.getElementById("chooseImg").click()}>
//                 <img
//                     src={UploadPoster}
//                     className="mx-auto"
//                     alt="posterImage"
//                     height="106"
//                 />
//             </div>
//         </div>
//     );
// }
