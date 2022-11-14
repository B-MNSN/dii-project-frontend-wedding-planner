import check from '../image/check.png';
import { useState } from "react";
import Modal from "../components/ModalDetails";

function DetailList() {
    const [modalShow, setModalShow] = useState(false);

    return(
        <>
            <div className="border bg-secondary rounded-2 bg-opacity-10 ms-3 w-75 ">
                <div className="row ms-5 mt-4">
                    <div className="col-12">
                        <h3>name list</h3>
                    </div>
                    <div className="col-2 mt-4">
                        <div className='bg-secondary rounded-2 d-flex justify-content-center'>
                            <img src={check} alt='check' width={150} className='img-fluid'/>
                        </div>
                        <div className='d-flex justify-content-center mt-2' onClick={() => setModalShow(true)}>
                            <p>name</p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    );
    
};
export default DetailList;