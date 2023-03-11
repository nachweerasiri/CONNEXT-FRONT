import CircleBackground from "./CircleBackground";

export default function Background({ bgColor = "" }) {
  return (
    <div className={`h-[100vh] w-[100vw] fixed top-0 left-0 -z-50 ${bgColor} bg-black`}>
      <CircleBackground format={{ top: true, left: true, color: "bg-[#AE3B68]" }} />
      <CircleBackground format={{ top: true, left: false, color: "bg-[#460EA2]" }} />
      <CircleBackground format={{ top: false, left: true, color: "bg-[#460EA2]" }} />
      <CircleBackground format={{ top: false, left: false, color: "bg-[#AE3B68]" }} />
    </div>
  );
}
