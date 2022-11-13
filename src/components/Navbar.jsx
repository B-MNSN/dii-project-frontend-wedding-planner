import logo from "../image/logo_cusu.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useState } from "react";
import Modal from "./ModalOrganize";

function Navbar() {
  const [modalShow, setModalShow] = useState(false);
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
            <text className="mx-3 text-dark" onClick={() => setModalShow(true)}>
              HOW TO
            </text>
          </div>
          <div>
            <HiOutlineUserCircle size={"30"} />
          </div>
        </div>
      </div>

      <Modal show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  );
}

export default Navbar;
