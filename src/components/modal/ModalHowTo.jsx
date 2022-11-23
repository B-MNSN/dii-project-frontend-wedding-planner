import Modal from 'react-bootstrap/Modal';

function ModalHowTo({ show, onHide }) {
    const propSimulator = { onHide, show };

    return(
        <>
            <Modal {...propSimulator}>
                <Modal.Header closeButton>
                    <Modal.Title>ABOUT ME</Modal.Title>
                </Modal.Header>
                <Modal.Body>เว็บไซต์ของเราคือเว็บที่ช่วยวางแผนและเห็นภาพงานแต่งงานของคุณได้ง่ายขึ้นจากการที่คุณใช้เว็บไซตืของเรา โดยเริ่มวางแผนโดยการคลิ๊กที่ WEDDING PLANNER ได้เลย</Modal.Body>
            </Modal>
        </>
    );
    
}
export default ModalHowTo;