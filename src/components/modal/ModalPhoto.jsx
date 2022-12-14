import Modal from 'react-bootstrap/Modal';
import viking from '../../image/viking.jpg';
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios, { AxiosError } from "axios";

function ModalPhoto({ show, onHide, photo }) {
    const propSimulator = { onHide, show };
    const [user, setUser] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("status"));
    const { userid } = useParams();
    const [transaction, setTransaction] = useState();
    const [tranid, setTranid] = useState('')

    useEffect(() => {
        async function getTransaction(){
            try{
                const tran = await axios.get(`http://localhost:4001/transaction/getuser/${userid}`,{
                    headers: {
                        'token': token
                    }
                });
                setTransaction(tran.data)
                setTranid(tran.data[0]._id)
                

            }catch (error){
                console.error(error)
            }
        };
        getTransaction();
    },[]);

    // console.log(tranid);
    const confirm = () => {
        console.log(photo.photo_name);
        console.log(photo.photo_price);
        try{
            axios.put(`http://localhost:4001/transaction/update/${tranid}?update=photo`, {
                value: photo.photo_name
                
            });
            axios.put(`http://localhost:4001/transaction/update/${tranid}?update=photo_price`, {
                value: photo.photo_price
                
            }).then((response) => {
                console.log(response);
            })
        } 
        catch (error){
            console.error(error);
        }
    }

    if(!photo) return <></>

    return(
        <>
            <Modal {...propSimulator} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title className='ms-4'>{photo.photo_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row mx-5'>
                        <div className='col-12 d-flex justify-content-center'>
                            <div> 
                                <img src={photo.photo_img} alt='check' width={500} height={300} className='rounded-2 shadow'/>
                            </div>
                        </div>
                        <div className='col-12 d-flex justify-content-center mt-4'> 
                            <div>
                                <p><strong>??????????????????????????????:</strong> {photo.photo_description}</p>
                                <p><strong>????????????:</strong> {photo.photo_price} ?????????</p>
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
export default ModalPhoto;