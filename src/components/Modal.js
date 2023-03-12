import VerticalSpace from "./VerticalSpace";

export default function Modal({
  children,
  title,
  isOpen,
  onClose,
  titleSize = "text-xl",
  alwaysOpen = false
}) {
  return (
    <>
      {/* background */}
      <div
        className={`${
          isOpen ? "" : "hidden"
        } fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-[#232323aa] z-50`}
        onMouseDown={!alwaysOpen ? onClose : () => {}}
      >
        {/* card */}
        <div
          className="relative rounded-3xl p-2 w-3/4 top-10 mx-auto bg-[#000000dd] mb-[15vh]"
          onMouseDown={(e) => (!alwaysOpen ? e.stopPropagation() : {})}
        >
          <VerticalSpace />
          <div className="rounded-lg">
            <div className="flex flex-col items-center space-y-4 md:space-y-6 sm:p-8"></div>
            <div className={`${titleSize}  font-bold text-center text-[#999999]`}>{title}</div>
            <VerticalSpace />
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

// export default function Modal({ open, onClose, children, title }) {
//     // false คือปิด modal
//     return (
//         <>
//             {/* d-block คือตัวที่ทำให้โชว์ Modal กับ tag ปิดของมัน modal-backdrop */}
//             <div
//                 className={`modal fade show ${open ? "d-block" : ""}`}
//                 tabIndex="-1"
//                 onClick={onClose}
//             >
//                 {/* ถ้า open เป็นจริง ให้เปิด d-block แต่ถ้าไม่ ให้เป็น ค่าว่าง"" */}
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <button
//                                 type="button"
//                                 className="btn-close invisible"
//                             />
//                             <h5 className="modal-title">{title}</h5>
//                             <button
//                                 type="button"
//                                 className="btn-close"
//                                 onClick={onClose}
//                             />
//                         </div>
//                         {/* children เอาไว้ใส่รูป */}
//                         <div className="modal-body">{children}</div>
//                     </div>
//                 </div>
//             </div>
//             {open && <div className="modal-backdrop fade show" />}
//             {/* conditional rendering แทรก expression ก็คือ ถ้าopen เป็น true ก็จะแสดง backdrop นี้ */}
//         </>
//     );
// }
