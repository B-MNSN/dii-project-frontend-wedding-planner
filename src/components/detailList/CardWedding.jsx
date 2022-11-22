import { useState } from "react";
import Modal from "../modal/ModalCard";
import check from "../../image/check.png";

function CardWedding({card}) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
          <div className="col-md-3 mx-3 mt-4">
            <div className="d-flex justify-content-center">
              <img src={card.card_img} alt="check" width={150} height={150} className="rounded-2 shadow" />
            </div>
            <div
              className="d-flex justify-content-center mt-2"
              onClick={() => setModalShow(true)}
            >
              <p>{card.card_name}</p>
            </div>
          </div>
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            card={card}
          />
        </>
      );
    
};

export default CardWedding;
