import Modal from 'react-bootstrap/Modal';
import check from '../image/check.png';

function ModalOrganize({ show, onHide }) {
    const propSimulator = { onHide, show };
    const colse = () => {
        window.location.href = '/';
    }

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
                            <div className='col-3'>
                                <div className='bg-secondary rounded-2 d-flex justify-content-center'>
                                    <img src={check} alt='check' width={150} className='img-fluid'/>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <p>Lorem Ipsum 100%</p>
                                </div>
                            </div>

                        </div>
                        <div className='col d-flex justify-content-center mt-3'>
                            <button className='btnCancel border-0 rounded-2 text-light m-2 px-4 py-1' onClick={colse}>Cancel</button>
                            <button className='btnConfirm border-0 rounded-2 text-light m-2 px-4 py-1'>Confirm</button>
                        </div>
                        
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
    
}
export default ModalOrganize;