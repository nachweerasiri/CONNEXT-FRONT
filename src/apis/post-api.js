import axios from "../config/axios";

// export const seeker = input => axios.post("/seeker", input);
// export const seller = input => axios.post("/seller", input);

export const createPost = (input) => axios.post("/post", input);
export const getPost = () => axios.get("/post");
export const getSeeker = () => axios.get("/post/seeker");
export const getSeller = () => axios.get("/post/seller");

// ไปเขียนหลังบ้านนะ
export const getPostbyId = (id) => axios.get("/post/seeker/" + id);
