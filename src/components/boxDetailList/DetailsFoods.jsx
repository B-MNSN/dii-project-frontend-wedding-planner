import Food from '../detailList/Food';
import { useState } from "react";
import Modal from '../modal/ModalDetails';

function DetailList({ foods, display }) {
    const [modalShow, setModalShow] = useState(false);
    const confirm = () => {
        window.location.href = '/my_wedding_planner';
    };
    // console.log(display);
    if(!foods) return <> </>
    
    return(
        <>
            <div style={{display }} className="border bg-secondary rounded-2 bg-opacity-10 col-md-7 shadow">
                <div className="row d-flex">
                    <div className="col-12">
                        <h3 className='ms-5 mt-4'>อาหาร</h3>
                    </div>
                    <div className='col d-flex flex-wrap ms-5'>
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