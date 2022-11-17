import check from '../image/check.png';
import { useState } from "react";
import Modal from '../components/ModalDetails';

function Food({foods}) {
    const [modalShow, setModalShow] = useState(false);
    // const confirm = () => {
    //     window.location.href = '/my_wedding_planner';
    // };
    return(
        <>
            {/* <div className="border bg-secondary rounded-2 bg-opacity-10 ms-3 w-75 "> */}
                <div className="row ms-5 mt-4">
                    {/* <div className="col-12">
                        <h3>name list</h3>
                    </div> */}
                    <div className="col-2 mt-4">
                        <div className='bg-secondary rounded-2 d-flex justify-content-center'>
                            <img src={check} alt='check' width={150} className='img-fluid'/>
                        </div>
                        <div className='d-flex justify-content-center mt-2' onClick={() => setModalShow(true)}>
                            <p>{foods.food_catagory}</p>
                        </div>
                    </div>
                </div>
                {/* <div className='d-flex justify-content-end mt-5 me-5'>
                    <button className='btnSkip border-0 rounded-2 text-light m-2 px-4 py-1'>Skip</button>
                    <button className='btnNext border-0 rounded-2 text-light m-2 px-4 py-1' onClick={confirm}>Next</button>
                </div> */}
            {/* </div> */}
            <Modal show={modalShow} onHide={() => setModalShow(false)} foods={foods}/>
        </>
    );
    
};
export default Food;