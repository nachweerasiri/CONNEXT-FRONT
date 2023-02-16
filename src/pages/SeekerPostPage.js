import Input from "../components/Input";
import usePost from "../hooks/usePost";

export default function SeekerPostPage() {
    const { currentPost } = usePost();
    return (
        <form>
            <div className="col-6">
                <Input
                    placeholder="Topic"
                    name="topic"
                    value={currentPost.topic}
                    // onChange={handleChangeInput}
                />
            </div>
            <div className="col-6">
                <Input
                    placeholder="Price"
                    name="price"
                    value={currentPost.price}
                    // onChange={handleChangeInput}
                />
            </div>
            <div className="col-6">
                <Input
                    placeholder="Description"
                    name="description"
                    value={currentPost.description}
                    // onChange={handleChangeInput}
                />
            </div>
            <div className="col-6">
                <Input
                    placeholder="Contact"
                    name="contact"
                    value={currentPost.conract}
                    // onChange={handleChangeInput}
                />
            </div>
            <div>
                <input
                    type="file"
                    className="hidden"
                    id="chooseImg"
                    accept="image/*"
                    // onChange={e => {
                    //     if (e.target.files[0]) {
                    //         setFile(e.target.files[0]);
                    //     }
                    // }}
                    multiple
                />
                <div
                    onClick={() => document.getElementById("chooseImg").click()}
                >
                    <img
                        /** เช็คว่า file มีค่ามั้ย ถ้ามีจะเป็น URL.createObjectURL(file) ถ้าไม่ก็จะ return ไฟล์รูป UploadPoster  */
                        // src={file ? URL.createObjectURL(file) : UploadPoster}
                        className="mx-auto"
                        alt="posterImage"
                        height="106"
                    />
                </div>
            </div>
        </form>
    );
}
