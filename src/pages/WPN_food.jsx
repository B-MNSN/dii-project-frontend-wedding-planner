import { useState, useEffect } from "react";
import SelectStep from "../components/SelectSteap";
import Modal from '../components/modal/ModalDetails';
import Food from '../components/detailList/Food';
import axios from 'axios';
import Navbar from "../components/Navbar";
import { Link, useParams } from 'react-router-dom';
import Loading from "./Loading";

function WPN_food(){
    const [modalShow, setModalShow] = useState(false);
    const [foods, setFoods] = useState([]);
    let {userid } = useParams();
    const [user, setUser] = useState();
    const [token, setToken] = useState(localStorage.getItem("status"));
    const [user_id,setuser_id] = useState('');
    const [onStep,setOnStep] = useState('');
    const [transaction, setTransaction] = useState();
    const [tranid, setTranid] = useState('')

    if(!token){
        window.location.href='/login'
    }

    useEffect(() => {
        async function getFoods(){
         try {
            const foods = await axios.get(
                `http://localhost:4001/food`
            );
            setFoods(foods.data);

         } catch (error) {
             console.error(error);
         }
        };
        getFoods();

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

    const next = () => {
        try {
            axios.put(`http://localhost:4001/transaction/update/${tranid}?update=step`, {
                value: 4
            });
        } catch (error) {
            console.error(error);
        }

    };

    if(!foods && !transaction) return <></>

    return(
        <>
            <Navbar />
            <div className="d-flex justify-content-center mt-5 mx-5 row">
                <SelectStep onStep={onStep}/>
                <div className="border bg-secondary rounded-2 bg-opacity-10 col-md-7 shadow">
                    <div className="row d-flex">
                        <div className="col-12">
                            <h3 className='ms-5 mt-4'>อาหาร</h3>
                        </div>
                        {
                            foods.length !== 0 ?
                            <div className='col d-flex flex-wrap ms-5'>
                                {foods.map((food) => (
                                    <Food key={food._id} foods={food}/>
                                ))}
                            </div>:
                            <div className="col d-flex justify-content-center mt-5">
                                <Loading/>
                            </div>

                        }
                        <div className='d-flex justify-content-end'>
                            <Link to={`/WPN_location/${user_id}`}>
                                <button className='btnSkip border-0 rounded-2 text-light m-2 px-4 py-1' onClick={next}>Skip</button>
                            </Link>
                            <Link to={`/WPN_location/${user_id}`}>
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
export default WPN_food;