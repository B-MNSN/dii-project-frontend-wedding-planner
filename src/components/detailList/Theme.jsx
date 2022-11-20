import check from "../../image/check.png";
import { useState } from "react";
import Modal from "../modal/ModalTheme";

function Theme({ theme }) {
  const [modalShow, setModalShow] = useState(false);

  if(!theme) return <></>

  

  const onhandle = (event) => {
    console.log(event.target.innerText);
  }


  return (
    <>
      <div className="col-md-3 mx-3 mt-4">
        <div className="bg-secondary rounded-2 d-flex justify-content-center">
          <img src={check} alt="check" width={150} className="img-fluid" onClick={() => setModalShow(true)}/>
        </div>
        <div
          className="d-flex justify-content-center mt-2"
        >
          <p onClick={onhandle}>{theme.theme_name}</p>
        </div>
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        theme={theme}
      />
    </>
  );
}
export default Theme;