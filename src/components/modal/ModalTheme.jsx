import Modal from 'react-bootstrap/Modal';
import viking from '../../image/viking.jpg';
import axios, { AxiosError } from "axios";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';

function ModalTheme({ show, onHide, theme }) {
    const propSimulator = { onHide, show };
    // const colse = () => {
    //     window.location.href = '/';
    // };
    const { tran_id } = useParams();
    // console.log(tran_id);
    const [transaction, setTransaction] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("status"));

    useEffect(() => {
        async function getTransaction(){
            try{
                const tran = await axios.get(`http://localhost:4001/transaction/${tran_id}`,{
                    headers: {
                        'token': token
                    }
                });
                setTransaction(tran.data)
            }catch (error){
                console.error(error)
            }
        };
        getTransaction();
    },[]);

    const confirm = async (e) => {
        // console.log(transaction)
        try{
            const trans = await axios.put(`http://localhost:4001/transaction/update/${transaction._id}?update=theme`, {
                value: theme.theme_name
                
            });
            console.log(trans);
        } 
        catch (error){
            console.error(error);
        }
    };

    if(!theme) return <></>

    return(
        <>
            <Modal {...propSimulator} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title className='ms-4'>{theme.theme_name}</Modal.Title>
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
                                <p><strong>รายละเอียด:</strong> {theme.theme_description}</p>
                                <p><strong>ราคา:</strong> {theme.theme_price} บาท</p>
                            </div>
                        </div>
                        <div className='col d-flex justify-content-center mt-3'>
                            <button className='btnCancel border-0 rounded-2 text-light m-2 px-4 py-1' >Cancel</button>
                            <button className='btnConfirm border-0 rounded-2 text-light m-2 px-4 py-1' onClick={confirm}>Confirm</button>
                        </div>
                        
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
    
}
export default ModalTheme;