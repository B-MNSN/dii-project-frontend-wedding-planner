import logo from "../image/logo_cusu.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useState, useEffect } from "react";
import Modal from "./modal/ModalHowTo";
import axios from 'axios';

function Navbar() {
  // const { tran_id } = useParams();
  
  const [modalShow, setModalShow] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("status"));
  const clear = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  const [user, setUser] = useState();

  useEffect(() => {
        async function  getUser(){
            try{
                const user = await axios.get('http://localhost:4001/login/getuser',{
                    headers: {
                        'token': token
                    }
                });
                setUser(user.data)
                // console.log(user.data)
            }catch (error){
                console.error(error)
            }
        };
        getUser();
  },[]);

  if(!user) return <></>

  return (
    <>
      <div className="navbarr sticky-top shadow" style={{
          // backgroundColor: navColor,
          // transition: "all 1s"
        }}>
        <div className="d-flex justify-content-around p-2">
          <a href="/home"><img src={logo} alt="logo" href="" width={100} /></a>
          <div className="">
            <a href="/home" className="mx-3 text-dark text-decoration-none">
              HOME
            </a>
            <a href={`/WPN_Guest`} className="mx-3 text-dark text-decoration-none">
              WEDDING PLANNER
            </a>
            <text className="mx-3 text-dark" onClick={() => setModalShow(true)}>
              ABOUT ME
            </text>
          </div>
          <div>
            <div>
              <div data-bs-toggle="dropdown" aria-expanded="false">
                <HiOutlineUserCircle size={"30"} />
              </div>
              <ul className="dropdown-menu dropdown-menu-end ">
                <li><p className="dropdown-item text-center">{user.user_name}</p></li>
                <li><p className="dropdown-item text-center">{user.email}</p></li>
                <li><p className="dropdown-item text-danger text-center" onClick={clear}>LOGOUT</p></li>
              </ul>
          </div>
          </div>
        </div>
      </div>

      <Modal show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  );
}

export default Navbar;
