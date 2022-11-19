import { useState } from "react";
import Modal from "../modal/ModalGift";
import check from "../../image/check.png";

function Gift({gift}) {
    const [modalShow, setModalShow] = useState(false);

    if(!gift) return <></>
    
    return (
        <>
          <div className="col-md-3 mx-3 mt-4">
            <div className="bg-secondary rounded-2 d-flex justify-content-center">
              <img src={check} alt="check" width={150} className="img-fluid" />
            </div>
            <div
              className="d-flex justify-content-center mt-2"
              onClick={() => setModalShow(true)}
            >
              <p>{gift.gift_name}</p>
            </div>
          </div>
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            gift={gift}
          />
        </>
      );
    
};

export default Gift;
