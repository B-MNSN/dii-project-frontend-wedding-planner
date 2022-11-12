import logo from "../image/logo_cusu.png";
import { HiOutlineUserCircle } from "react-icons/hi";

function Navbar() {
  return (
    <>
      <div className="shadow">
        <div className="d-flex justify-content-around p-2">
          <a href="/"><img src={logo} alt="logo" href="" width={100} /></a>
          <div className="">
            <a href="/" className="mx-3 text-dark text-decoration-none">
              HOME
            </a>
            <a href="/" className="mx-3 text-dark text-decoration-none">
              WEDDING PLANNER
            </a>
            <a href="/" className="mx-3 text-dark text-decoration-none">
              HOW TO
            </a>
          </div>
          <div>
            <HiOutlineUserCircle size={"30"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
