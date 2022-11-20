import logo from "../image/logo_cusu.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useState, useEffect } from "react";
import Modal from "./modal/ModalHowTo";

function Navbar() {
  const [modalShow, setModalShow] = useState(false);

  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("#fff");

  const listenScrollEvent = () => {
    window.scrollY > 30 ? setnavColor("#E7D6CC") : setnavColor("#fff");
    // window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);


  return (
    <>
      <div className="navbarr sticky-top shadow" style={{
          backgroundColor: navColor,
          transition: "all 1s"
        }}>
        <div className="d-flex justify-content-around p-2">
          <a href="/home"><img src={logo} alt="logo" href="" width={100} /></a>
          <div className="">
            <a href="/" className="mx-3 text-dark text-decoration-none">
              HOME
            </a>
            <a href="/wedding_planner" className="mx-3 text-dark text-decoration-none">
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
