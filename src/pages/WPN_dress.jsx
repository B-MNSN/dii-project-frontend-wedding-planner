import { useState, useEffect } from "react";
import SelectStep from "..//components/SelectSteap";
import Modal from '../components/modal/ModalDress';
import DressWedding from '../components/detailList/DressWedding';
import axios from 'axios';
import Navbar from "../components/Navbar";

function WPN_dress(){
    const [modalShow, setModalShow] = useState(false);
    const [dressWedding, setDressWedding] = useState([]);

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

    return(
        <>
            <Navbar/>
            <div className="d-flex justify-content-center mt-5 mx-5 row">
                <SelectStep/>
                <div className="border bg-secondary rounded-2 bg-opacity-10 col-md-7 shadow">
                    <div className="row d-flex">
                        <div className="col-12">
                            <h3 className='ms-5 mt-4'>ชุดแต่งงาน</h3>
                        </div>
                        <div className='col d-flex flex-wrap ms-5'>
                            {dressWedding.map((dress) => (
                                <DressWedding key={dress._id} dressWedding={dress}/>
                            ))}
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button className='btnSkip border-0 rounded-2 text-light m-2 px-4 py-1'>Skip</button>
                            <button className='btnNext border-0 rounded-2 text-light m-2 px-4 py-1' >Next</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    )
};
export default WPN_dress;