import { useState } from "react";
import Modal from "../modal/ModalLocation";
import check from "../../image/check.png";

function Location({location}) {
    const [modalShow, setModalShow] = useState(false);

    if(!location) return <></>

    return (
    <>
      <div className="col-md-3 mx-3 mt-4">
        <div className="d-flex justify-content-center">
          <img src={location.location_img} alt="check" width={150} height={150} className="rounded-2 shadow" />
        </div>
        <div
          className="d-flex justify-content-center mt-2"
          onClick={() => setModalShow(true)}
        >
          <p>{location.location_name}</p>
        </div>
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        location={location}
      />
    </>
 )
    
};

export default Location;
