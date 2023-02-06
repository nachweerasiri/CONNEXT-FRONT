export default function LoginForm() {
    return (
        <form className="d-flex flex-column gap-3">
            <input
                type="text"
                className="form-control"
                placeholder="Your Email"
            />
            <input
                type="password"
                className="form-control"
                placeholder="Password"
            />
            <div className="text-white text-center tw-py-2.5">
                <button className="btn btn-primary w-100 fw-bold rounded-md h-12 text-4.5">
                    Log In
                </button>
            </div>
        </form>
    );
}
