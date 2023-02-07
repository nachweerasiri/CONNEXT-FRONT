// Joi เอาไว้ใช้สำหรับการกรอกอะไรผิดแล้วมันจะมีคำขึ้นมา และสามารถกำหนด messages เองได้ด้วย
import Joi from "joi";

const registerSchema = Joi.object({
    userName: Joi.string().trim().required().messages({
        "string.empty": "User Name is required",
    }),
    yourEmail: Joi.string().email({ tlds: false }).messages({
        "string.empty": "Email is required",
    }),
    newPassword: Joi.string().alphanum().min(6).required().trim().messages({
        "string.empty": "Password is required",
        "string.alphanum": "Password must contain number or alphabet",
        "string.min": "Password must have at least 6 characters",
    }),
    confirmPassword: Joi.string()
        // ก็คือ ค่าที่ Valid ได้ จะต้อง reference ไปเหมือน newPassword
        .valid(Joi.ref("newPassword"))
        .required()
        .trim()
        .messages({
            "string.empty": "Confirm password is required",
            "any.only": "Password and confirm password did not match",
        }),
});

// validate เพื่อหา error ของแต่ละ input ในรูปของ asynchronous
const validateRegister = input => {
    const { error } = registerSchema.validate(input, {
        abortEarly: false, //เพื่อ validate ทุกตัว
    });

    if (error) {
        // เปลี่ยน array ให้อยู้ในรูป object เลยใช้ reduce // acc = accurator
        // {userName: "User Name is required", yourEmail: "Your Email is required"}
        const errorResult = error.details.reduce((acc, el) => {
            acc[el.path[0]] = el.message;
            return acc;
        }, {});
        return errorResult;
    }
};

export default validateRegister;
