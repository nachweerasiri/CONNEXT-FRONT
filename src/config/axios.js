import axios from "axios";
import { getAccessToken } from "../utils/local-storage";

// axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;
axios.defaults.baseURL = "http://localhost:8888";

/* ขาส่ง */
axios.interceptors.request.use(
    /* ถ้าเราต้องการจะแก้ไข้ค่า config อะไรก็ตามก่อนส่ง req ไป เราสามารถแก้ในนี้ได้ */
    config => {
        if (getAccessToken()) {
            config.headers.authorization = `Bearer ${getAccessToken()}`;
        }
        return config;
    },
    /* ถ้า axios มันดันเกิด error ก่อนจะมาถึง interceptor มันจะส่ง err มาให้ก่อน */
    err => {
        return Promise.reject(err);
    }
);

export default axios;
