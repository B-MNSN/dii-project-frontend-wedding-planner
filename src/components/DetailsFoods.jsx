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
            <div className="border bg-secondary rounded-2 bg-opacity-10 ms-3 w-75 ">
                <div className="row ms-5 mt-4">
                    <div className="col-12">
                        <h3>name list</h3>
                    </div>
                    {foods.length > 0 ? (
                        <div>
                        {foods.map((food) => (
                        <Food key={food._id} foods={food}/>
                    ))}
                        </div>
                ) : (
                  <p></p>
                )}
                    
                </div>
                
                <div className='d-flex justify-content-end mt-5 me-5'>
                    <button className='btnSkip border-0 rounded-2 text-light m-2 px-4 py-1'>Skip</button>
                    <button className='btnNext border-0 rounded-2 text-light m-2 px-4 py-1' onClick={confirm}>Next</button>
                </div>
            </div>
            <Modal show={modalShow} onHide={() => setModalShow(false)}/>
            

        </>
    );
    
};
export default DetailList;