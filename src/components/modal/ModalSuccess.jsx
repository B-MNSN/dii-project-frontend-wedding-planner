import Modal from 'react-bootstrap/Modal';
import check from '../../image/check.png';

function ModalHowTo({ show, onHide }) {
    const propSimulator = { onHide, show };
    const colse = () => {
        window.location.reload()
    }
    const confirm = () => {
        window.location.href = '/home';
    }

    return(
        <>
            <Modal {...propSimulator} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-12 d-flex justify-content-center'>
                            <div> 
                                <img src={check} alt='check' width={150}/>
                            </div>
                        </div>
                        <div className='col-12 d-flex justify-content-center'> 
                            <div>
                               <text>ทางเราได้รับแพลนของคุณแล้ว</text>
                               <br/>
                                <text>ทางเราได้ส่งอีเมลให้คุณแล้ว</text> 
                            </div>

                        </div>
                        <div className='col d-flex justify-content-center mt-3'>
                            <button className='btnCancel border-0 rounded-2 text-light m-2 px-4 py-1' onClick={colse}>Cancel</button>
                            <button className='btnConfirm border-0 rounded-2 text-light m-2 px-4 py-1' onClick={confirm}>Confirm</button>
                        </div>
                        
                    </div>
                </Modal.Body>
            </Modal>
            
        </>
    );
    
}
export default ModalHowTo;