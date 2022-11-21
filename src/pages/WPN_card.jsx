import { useState, useEffect } from "react";
import SelectStep from "../components/SelectSteap";
import CardWedding from '../components/detailList/CardWedding';
import Modal from '../components/modal/ModalCard';
import axios from 'axios';
import Navbar from "../components/Navbar";

function WPN_card(){
    const [modalShow, setModalShow] = useState(false);
    const [card, setCard] = useState([]);

    useEffect(() => {
        async function getCard(){
         try {
             const card = await axios.get(
                `http://localhost:4001/card`
            );
            setCard(card.data);

         } catch (error) {
             console.error(error);
         }
        };
        getCard();

    }, []);

    return(
        <>
            <Navbar />
            <div className="d-flex justify-content-center mt-5 mx-5 row">
                <SelectStep/>
                <div className="border bg-secondary rounded-2 bg-opacity-10 col-md-7 shadow">
                    <div className="row d-flex">
                        <div className="col-12">
                            <h3 className='ms-5 mt-4'>การ์ดแต่งงาน</h3>
                        </div>
                        <div className='col d-flex flex-wrap ms-5'>
                            {card.map((cards) => (
                                <CardWedding key={cards._id} card={cards}/>
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
export default WPN_card;