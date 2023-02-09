import profileImage from "../assets/icons/AvatarDefault.jpg";

export default function Avatar({ src, size }) {
    return (
        <img
            src={src || profileImage}
            className="rounded-full cursor-pointer"
            alt="user"
            width={size}
            height={size}
            /** ทำให้คลิกที่รูปแล้ว choose img ได้ ด้วยการตั้ง id ให้มัน */
        />
    );
}
