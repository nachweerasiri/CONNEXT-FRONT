import { useState } from "react";
// import { toast } from "react-toastify";
import Input from "../components/Input";
// import * as authApi from "../../apis/auth-api";
// import useLoading from "../../hooks/useLoading";
import UploadPoster from "../assets/icons/posterImage.png";
import { createPost } from "../apis/post-api";

const initialInput = {
    topic: "",
    price: "",
    description: "",
    contact: "",
};

export default function AddTicketPage() {
    // ค่าเริ่มต้นของแต่ละ Input แทนด้วย initialInput
    const [input, setInput] = useState(initialInput);
    const [file, setFile] = useState(null);
    // const [error, setError] = useState({});

    // /** destructuring */
    // const { startLoading, stopLoading } = useLoading();

    // ใน {} คือ function ที่เอาไว้อัพเดท state
    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
        // toast.success("Success add Ticket!");
    };

    const handleClickSeeker = () => {
        const formData = new FormData();
        formData.append("topic", input.topic);
        formData.append("price", input.price);
        formData.append("description", input.description);
        formData.append("contact", input.contact);
        formData.append("postType", "seeker");
        formData.append("posterImage", file);
        createPost(formData);
    };

    const handleClickSeller = () => {
        const formData = new FormData();
        formData.append("topic", input.topic);
        formData.append("price", input.price);
        formData.append("description", input.description);
        formData.append("contact", input.contact);
        formData.append("postType", "seller");
        formData.append("posterImage", file);
        createPost(formData);
    };

    return (
        <form>
            <div className="col-6">
                <Input
                    placeholder="Topic"
                    name="topic"
                    value={input.topic}
                    onChange={handleChangeInput}
                />
            </div>
            <div className="col-6">
                <Input
                    placeholder="Price"
                    name="price"
                    value={input.price}
                    onChange={handleChangeInput}
                />
            </div>
            <div className="col-6">
                <Input
                    placeholder="Description"
                    name="description"
                    value={input.description}
                    onChange={handleChangeInput}
                />
            </div>
            <div className="col-6">
                <Input
                    placeholder="Contact"
                    name="contact"
                    value={input.contact}
                    onChange={handleChangeInput}
                />
            </div>
            <div>
                <input
                    type="file"
                    className="hidden"
                    id="chooseImg"
                    accept="image/*"
                    onChange={e => {
                        if (e.target.files[0]) {
                            setFile(e.target.files[0]);
                        }
                    }}
                    multiple
                />
                <div
                    onClick={() => document.getElementById("chooseImg").click()}
                >
                    <img
                        /** เช็คว่า file มีค่ามั้ย ถ้ามีจะเป็น URL.createObjectURL(file) ถ้าไม่ก็จะ return ไฟล์รูป UploadPoster  */
                        src={file ? URL.createObjectURL(file) : UploadPoster}
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
                        <button type="button" onClick={handleClickSeeker}>
                            Seeker
                        </button>
                    </div>
                    <div className="bg-seeker text-white rounded-r-3xl text-lg">
                        <button type="button" onClick={handleClickSeller}>
                            Seller
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
