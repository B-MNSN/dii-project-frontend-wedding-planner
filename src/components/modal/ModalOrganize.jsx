import Modal from 'react-bootstrap/Modal';
import check from '../../image/check.png';
import { useState } from "react";
import ModalSuccess from './ModalSuccess';
import DetailModalOrg from './DetailModalOrg';

function ModalOrganize({ show, onHide,orgName }) {
    const [modalShow, setModalShow] = useState(false);
    const propSimulator = { onHide, show };
    const colse = () => {
        window.location.href = '/home';
    }
    if(!orgName) return <></>
    // console.log(orgName)

    return(
        <>
            <Modal {...propSimulator} size={"lg"} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-12 ms-3 my-3'>
                            <div> 
                                <h4>Organize</h4>
                            </div>
                        </div>
                        <div className='mt-3 d-flex flex-wrap justify-content-around'>
                            <div className='col d-flex justify-content-center align-items-center'>
                                {orgName.map((org) => {
                                    return <DetailModalOrg key={org._id} orgName={org}/>
                                })}
                                    
                            </div>
                        </div>
                        <div className='col d-flex justify-content-center mt-3'>
                            <button className='btnCancel border-0 rounded-2 text-light m-2 px-4 py-1' onClick={colse}>Cancel</button>
                            <button className='btnConfirm border-0 rounded-2 text-light m-2 px-4 py-1' onClick={() => setModalShow(true)}>Confirm</button>
                        </div>
                        
                    </div>
                </Modal.Body>
            </Modal>
            <ModalSuccess show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    );
    
}
export default ModalOrganize;