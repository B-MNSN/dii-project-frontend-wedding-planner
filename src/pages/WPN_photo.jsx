import { useState, useEffect } from "react";
import SelectStep from "../components/SelectSteap";
import Modal from '../components/modal/ModalPhoto';
import Photo from '../components/detailList/Photo';
import axios from 'axios';
import Navbar from "../components/Navbar";
import { Link, useParams } from 'react-router-dom';

function WPN_photo(){
    const [modalShow, setModalShow] = useState(false);
    const [photo, setPhoto] = useState([]);
    let {userid } = useParams();
    const [user, setUser] = useState();
    const [token, setToken] = useState(localStorage.getItem("status"));
    const [user_id,setuser_id] = useState('');
    const [transaction, setTransaction] = useState();
    const [tranid, setTranid] = useState('');
    const [onStep,setOnStep] = useState('');

    useEffect(() => {
        async function getPhoto(){
         try {
             const photo = await axios.get(
                `http://localhost:4001/photo`
            );
            setPhoto(photo.data);

         } catch (error) {
             console.error(error);
         }
        };
        getPhoto();

    }, []);

    useEffect(() => {
        async function  getUser(){
            try{
                const user = await axios.get('http://localhost:4001/login/getuser',{
                    headers: {
                        'token': token
                    }
                });
                setUser(user.data)
                setuser_id(user.data._id);
                console.log(user)
            }catch (error){
                console.error(error)
            }
        };
        getUser();
    },[]);

    useEffect(() => {
        async function getTransaction(){
            try{
                const tran = await axios.get(`http://localhost:4001/transaction/getuser/${userid}`,{
                    headers: {
                        'token': token
                    }
                });
                setTransaction(tran.data[0])
                setTranid(tran.data[0]._id)
                setOnStep(tran.data[0].step)
            }catch (error){
                console.error(error)
            }
        };
        getTransaction();
    },[]);

    // console.log(userid)
    const next = async (e) => {
        try {
            const trans = await axios.put(`http://localhost:4001/transaction/update/${tranid}?update=step`, {
                value: 7
                
            });
            console.log(trans);
            
        } catch (error) {
            console.error(error);
        }

    };

    if(!photo && !transaction) return <></>

    return(
        <>
            <Navbar />
            <div className="d-flex justify-content-center mt-5 mx-5 row">
                <SelectStep onStep={onStep}/>
                <div className="border bg-secondary rounded-2 bg-opacity-10 col-md-7 shadow">
                    <div className="row d-flex">
                        <div className="col-12">
                            <h3 className='ms-5 mt-4'>ถ่ายรูป Pre-Wedding</h3>
                        </div>
                        <div className='col d-flex flex-wrap ms-5'>
                            {photo.map((photos) => (
                                <Photo key={photos._id} photo={photos}/>
                            ))}
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button className='btnSkip border-0 rounded-2 text-light m-2 px-4 py-1'>Skip</button>
                            <Link to={`/WPN_card/${userid}`}>
                                <button className='btnNext border-0 rounded-2 text-light m-2 px-4 py-1' onClick={next}>Next</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    )
};
export default WPN_photo;