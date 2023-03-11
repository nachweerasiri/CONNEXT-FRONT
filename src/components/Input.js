// ทำเพื่อจะได้กลับมาใช้ซ้ำได้

export default function Input({ type, placeholder, name, value, onChange, error }) {
  return (
    <>
      <input
        className={`form-control ${
          error ? "is-invalid" : ""
        } rounded-full bg-transparent text-white border-[#999999] border-[1px] p-2`}
        type={type || "text"} // ถ้าตรง Input ใส่ type ก็จะรับค่าตาม props ที่ export ไป แต่ถ้าไม่ ก็จะมีชนิดเป็น text
        placeholder={placeholder}
        // binding ค่าใส่เข้าไป ด้วยการส่ง State
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </>
  );
}
