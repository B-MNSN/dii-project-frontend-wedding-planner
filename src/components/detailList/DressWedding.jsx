import { useState } from "react";
import Modal from "../modal/ModalDress";
import check from "../../image/check.png";

function DressWedding({dressWedding}) {
    const [modalShow, setModalShow] = useState(false);

    if(!dressWedding) return <> </>
    
    return (
        <>
          <div className="col-md-3 mx-3 mt-4">
            <div className="d-flex justify-content-center">
              <img src={dressWedding.dress_img} alt="check" width={150} height={150} className="rounded-2 shadow" />
            </div>
            <div
              className="d-flex justify-content-center mt-2"
              onClick={() => setModalShow(true)}
            >
              <p>{dressWedding.dress_name}</p>
            </div>
          </div>
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            dressWedding={dressWedding}
          />
        </>
      );
    
};

export default DressWedding;
