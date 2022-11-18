import Modal from 'react-bootstrap/Modal';

function ModalHowTo({ show, onHide }) {
    const propSimulator = { onHide, show };

    return(
        <>
            <Modal {...propSimulator}>
                <Modal.Header closeButton>
                    <Modal.Title>วิธีการใช้งาน</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            </Modal>
        </>
    );
    
}
export default ModalHowTo;