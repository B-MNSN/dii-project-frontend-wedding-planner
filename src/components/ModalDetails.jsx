import Modal from 'react-bootstrap/Modal';
import viking from '../image/viking.jpg';

function ModalDetails({ show, onHide }) {
    const propSimulator = { onHide, show };
    const colse = () => {
        window.location.href = '/';
    }

    return(
        <>
            <Modal {...propSimulator} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title className='ms-4'>ธีม:ไวกิ้ง</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row mx-5'>
                        <div className='col-12 d-flex justify-content-center'>
                            <div> 
                                <img src={viking} alt='check' width={500} className='img-fluid rounded-2'/>
                            </div>
                        </div>
                        <div className='col-12 d-flex justify-content-center mt-4'> 
                            <div>
                                <p><strong>รายละเอียดธีม:</strong>  <br/>จัดพิธีแต่งงานตามฉบับชาวไวกิ้ง ซึ่งมีอายุเกาแก่ 1,000 ปี โดยมีการสร้างเรือยาวแบบพิเศษและย่างหมูป่าตามธรรมเนียมโบราณ งานวิวาห์ย้อนอดีต <br/></p>
                                <p><strong>ราคา:</strong> xxx,xxx - xxx,xxx บาท</p>
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
export default ModalDetails;