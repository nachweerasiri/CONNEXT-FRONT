import { useState } from "react";
import Modal from "../components/Modal";

export default function TradeHistoryPage() {
    const [open, setOpen] = useState(false);
    // false คือปิด modal
    return (
        <>
            <div>
                <div>
                    {/* ถ้า Click ก็จะมีค่า setOpen เป็น true (เปิด modal)*/}
                    <button onClick={() => setOpen(true)}>Slip</button>
                </div>
                <div>
                    <button onClick={() => setOpen(true)}>Ticket</button>
                </div>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}></Modal>
        </>
    );
}
