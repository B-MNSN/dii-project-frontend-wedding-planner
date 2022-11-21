import { useState, useEffect } from "react";
import SelectStep from "../components/SelectSteap";
import Modal from '../components/modal/ModalDetails';
import Food from '../components/detailList/Food';
import axios from 'axios';
import Navbar from "../components/Navbar";

function WPN_food(){
    const [modalShow, setModalShow] = useState(false);
    const [foods, setFoods] = useState([]);

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

    return(
        <>
            <Navbar />
            <div className="d-flex justify-content-center mt-5 mx-5 row">
                <SelectStep/>
                <div className="border bg-secondary rounded-2 bg-opacity-10 col-md-7 shadow">
                    <div className="row d-flex">
                        <div className="col-12">
                            <h3 className='ms-5 mt-4'>อาหาร</h3>
                        </div>
                        <div className='col d-flex flex-wrap ms-5'>
                            {foods.map((food) => (
                                <Food key={food._id} foods={food}/>
                            ))}
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button className='btnSkip border-0 rounded-2 text-light m-2 px-4 py-1'>Skip</button>
                            <button className='btnNext border-0 rounded-2 text-light m-2 px-4 py-1'>Next</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    )
};
export default WPN_food;