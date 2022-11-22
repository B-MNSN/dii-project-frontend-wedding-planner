import { useState } from "react";
import Modal from "../modal/ModalPhoto";

function Photo({ photo }) {
  const [modalShow, setModalShow] = useState(false);
  
  if(!photo) return <></>

  return (
    <>
      <div className="col-md-3 mx-3 mt-4">
        <div className="d-flex justify-content-center">
          <img src={photo.photo_img} alt="check" width={150} height={150} className="rounded-2 shadow" />
        </div>
        <div
          className="d-flex justify-content-center mt-2"
          onClick={() => setModalShow(true)}
        >
          <p>{photo.photo_name}</p>
        </div>
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        photo={photo}
      />
    </>
  );
}
export default Photo;
