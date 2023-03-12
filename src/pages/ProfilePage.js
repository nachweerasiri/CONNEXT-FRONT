import LayOutProfileHistory from "../template/LayOutProfileHistory";
import { Link } from "react-router-dom";
export default function ProfilePage() {
  return (
    <>
      <LayOutProfileHistory />
      <div className="flex items-center bottom-8 px-7 fixed w-full z-40">
        <div className="flex grow justify-around bg-gradient-to-r from-[#460EA2] to-[#AE3A68] p-3 rounded-full">
          <div>
            <Link className="navbar-brand" to="/seeker">
              <button className="text-white font-semibold text-lg">Seeker</button>
            </Link>
          </div>
          <div>
            <Link className="navbar-brand" to="/seller">
              <button className="text-white font-semibold text-lg">Seller</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
