import { useState } from "react";
import Modal from "../ModalDetails";

function Work() {
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
              <p>{foods.food_catagory}</p>
            </div>
          </div>
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            foods={foods}
          />
        </>
      );
    
};

export default Work;
