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
    // console.log(tran_id);
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

    const confirm = async (e) => {
        // console.log(tranid)
        try{
            const transTheme = await axios.put(`http://localhost:4001/transaction/update/${tranid}?update=theme`, {
                value: theme.theme_name
                
            });
            console.log(transTheme);

            const transThemePrice = await axios.put(`http://localhost:4001/transaction/update/${tranid}?update=theme_price`, {
                value: theme.theme_price
                
            });
            console.log(transThemePrice);
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
                                <img src={theme.theme_img} alt='check' width={500} height={300} className='rounded-2 shadow'/>
                            </div>
                        </div>
                        <div className='col-12 d-flex justify-content-center mt-4'> 
                            <div>
                                <p><strong>??????????????????????????????:</strong> {theme.theme_description}</p>
                                <p><strong>????????????:</strong> {theme.theme_price} ?????????</p>
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