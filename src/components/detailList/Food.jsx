import check from "../../image/check.png";
import { useState } from "react";
import Modal from "../modal/ModalDetails";

function Food({ foods }) {
  const [modalShow, setModalShow] = useState(false);
  // const confirm = () => {
  //     window.location.href = '/my_wedding_planner';
  // };

  if(!foods) return <></>

  return (
    <>
      <div className="col-md-3 mx-3 mt-4">
        <div className="d-flex justify-content-center">
          <img src={foods.food_img} alt="check" width={150} className="img-fluid rounded-2 shadow" />
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
}
export default Food;
