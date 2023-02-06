export default function Modal({ open, onClose, children, title }) {
    // false คือปิด modal
    return (
        <>
            {/* d-block คือตัวที่ทำให้โชว์ Modal กับ tag ปิดของมัน modal-backdrop */}
            <div
                className={`modal fade show ${open ? "d-block" : ""}`}
                tabIndex="-1"
                onClick={onClose}
            >
                {/* ถ้า open เป็นจริง ให้เปิด d-block แต่ถ้าไม่ ให้เป็น ค่าว่าง"" */}
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close invisible"
                            />
                            <h5 className="modal-title">{title}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                            />
                        </div>
                        {/* children เอาไว้ใส่รูป */}
                        <div className="modal-body">{children}</div>
                    </div>
                </div>
            </div>
            {open && <div className="modal-backdrop fade show" />}
            {/* conditional rendering แทรก expression ก็คือ ถ้าopen เป็น true ก็จะแสดง backdrop นี้ */}
        </>
    );
}
