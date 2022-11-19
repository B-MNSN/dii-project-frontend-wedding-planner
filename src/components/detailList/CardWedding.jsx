import { useState } from "react";
import Modal from "../modal/ModalCard";
import check from "../../image/check.png";

function CardWedding({card}) {
    const [modalShow, setModalShow] = useState(false);
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
              <p>{card.food_catagory}</p>
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
