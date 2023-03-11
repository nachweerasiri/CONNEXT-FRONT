import LayOutProCancelFooter from "../template/LayOutProCancelFooter";

export default function TradePage() {
  return (
    <>
      <LayOutProCancelFooter />
      <div className="flex justify-center items-center fixed bottom-28 w-full ">
        <div className="px-10 bg-gradient-to-r from-[#AE3A68] to-[#460EA2] text-white rounded-full text-xl font-bold p-4 shadow-xl">
          <button type="button">COMFIRM</button>
        </div>
      </div>
    </>
  );
}
