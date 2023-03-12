import { ToastContainer } from "react-toastify";

import "./App.css";
import Spinner from "./components/Spinner";
import useLoading from "./hooks/useLoading";
import Router from "./routes/Router";

/** Template */
// import ProAddFooter from "./template/ProAddFooter";
// import RegisAndLogin from "./template/RegisAndLogin";

function App() {
  const { loading } = useLoading();

  /* ทำให้ทุกหน้ากลายเป็นจอ Mobile เขียนมาจากหน้า app.css */

  return (
    <>
      <div className="container-mobile">
        {/* ถ้า loading มีค่าเป็น true ให้ทำการ render Component spinner */}
        {loading && <Spinner />}
        <Router />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>

      {/* Template */}
      {/* <ProAddFooter /> */}
      {/* <RegisAndLogin /> */}
    </>
  );
}

export default App;
