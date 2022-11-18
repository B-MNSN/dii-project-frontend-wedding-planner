import Food from './Food';
import { useState } from "react";
import Modal from '../components/ModalDetails';

function DetailList({foods}) {
    const [modalShow, setModalShow] = useState(false);
    const confirm = () => {
        window.location.href = '/my_wedding_planner';
    };
    // console.log(foods);
    
    return(
        <>
            <div className="border bg-secondary rounded-2 bg-opacity-10 col-md-8">
                <div className="row d-flex">
                    <div className="col-12">
                        <h3 className='ms-5 mt-4'>name list</h3>
                    </div>
                    <div className='col d-flex flex-wrap justify-content-center'>
                        {foods.map((food) => (
                            <Food key={food._id} foods={food}/>
                        ))}
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='btnSkip border-0 rounded-2 text-light m-2 px-4 py-1'>Skip</button>
                        <button className='btnNext border-0 rounded-2 text-light m-2 px-4 py-1' onClick={confirm}>Next</button>
                    </div>
                </div>
                
                
            </div>
            <Modal show={modalShow} onHide={() => setModalShow(false)}/>
            

        </>
    );
    
};
export default DetailList;