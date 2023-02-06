import "./App.css";
import Router from "./routes/Router";

function App() {
    return (
        <>
            {/* ทำให้ทุกหน้ากลายเป็นจอ Mobile เขียนมาจากหน้า app.css */}
            <div className="container-mobile">
                <Router />
            </div>
        </>
    );
}

export default App;
