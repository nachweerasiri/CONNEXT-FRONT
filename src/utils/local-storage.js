const ACCESS_TOKEN = "ACCESS_TOKEN";

/** getAccessToken คือ function ที่จะไปดึงค่า Access Token ที่อยู่ใน local storage */
/** Function ที่ไป read ค่าจาก local storage */
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
/** Function ที่รับค่าเป็น access token  */
export const setAccessToken = accessToken =>
    localStorage.setItem(ACCESS_TOKEN, accessToken);
/** Function remove เวลาที่เรา log out */
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
