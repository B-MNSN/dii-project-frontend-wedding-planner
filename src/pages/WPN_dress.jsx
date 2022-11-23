import { useState, useEffect } from "react";
import SelectStep from "..//components/SelectSteap";
import Modal from '../components/modal/ModalDress';
import DressWedding from '../components/detailList/DressWedding';
import axios from 'axios';
import Navbar from "../components/Navbar";
import { Link, useParams } from 'react-router-dom';
import Loading from "./Loading";

function WPN_dress(){
    const [modalShow, setModalShow] = useState(false);
    const [dressWedding, setDressWedding] = useState([]);
    let {userid } = useParams();
    const [user, setUser] = useState();
    const [token, setToken] = useState(localStorage.getItem("status"));
    const [user_id,setuser_id] = useState('');
    const [onStep,setOnStep] = useState('');
    const [transaction, setTransaction] = useState();
    const [tranid, setTranid] = useState([])
    const [x,setx] = useState(true)

    if(!token){
        window.location.href='/login'
    }
                  
    useEffect(() => {
        async function getDress(){
         try {
            const dressWedding = await axios.get(
                `http://localhost:4001/dress`
            );
            setDressWedding(dressWedding.data);

         } catch (error) {
             console.error(error);
         }
        };
        getDress();

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
    const next = async () => {
        try {
            const trans = await axios.put(`http://localhost:4001/transaction/update/${tranid}?update=step`, {
                value: 6
            });
            console.log(trans);
        } catch (error) {
            console.error(error);
        }

    };

    if(!dressWedding && !transaction) return <></>

    return(
        <>
            <Navbar/>
            <div className="d-flex justify-content-center mt-5 mx-5 row">
                <SelectStep onStep={onStep}/>
                <div className="border bg-secondary rounded-2 bg-opacity-10 col-md-7 shadow">
                    <div className="row d-flex">
                        <div className="col-12">
                            <h3 className='ms-5 mt-4'>ชุดแต่งงาน</h3>
                        </div>
                        {
                            dressWedding.length !== 0 ?
                            <div className='col d-flex flex-wrap ms-5'>
                                {dressWedding.map((dress) => (
                                    <DressWedding key={dress._id} dressWedding={dress}/>
                                ))}
                            </div>:
                            <div className="col d-flex justify-content-center mt-5">
                                <Loading/>
                            </div>
                        }
                        <div className='d-flex justify-content-end'>
                            <Link to={`/WPN_photo/${user_id}`}>
                                <button className='btnSkip border-0 rounded-2 text-light m-2 px-4 py-1' onClick={next}>Skip</button>
                            </Link>
                            <Link to={`/WPN_photo/${user_id}`}>
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
export default WPN_dress;