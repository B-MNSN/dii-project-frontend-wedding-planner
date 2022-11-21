import { useState, useEffect } from "react";
import SelectStep from "../components/SelectSteap";
import Location from '../components/detailList/Location';
import Modal from '../components/modal/ModalLocation';
import axios from 'axios';
import Navbar from "../components/Navbar";

function WPN_location(){
    const [modalShow, setModalShow] = useState(false);
    const [location, setLocation] = useState([]);

    const next = (e) => {

    };

    useEffect(() => {
        async function getLocation(){
         try {
            const location = await axios.get(
                `http://localhost:4001/location`
            );
            setLocation(location.data);

         } catch (error) {
             console.error(error);
         }
        };
        getLocation();

    }, []);

    return(
        <>
            <Navbar/>
            <div className="d-flex justify-content-center mt-5 mx-5 row">
                <SelectStep/>
                <div className="border bg-secondary rounded-2 bg-opacity-10 col-md-7 shadow">
                    <div className="row d-flex">
                        <div className="col-12">
                            <h3 className='ms-5 mt-4'>สถานที่</h3>
                        </div>
                        <div className='col d-flex flex-wrap ms-5'>
                            {location.map((locations) => (
                                <Location key={locations._id} location={locations}/>
                            ))}
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button className='btnSkip border-0 rounded-2 text-light m-2 px-4 py-1'>Skip</button>
                            <button className='btnNext border-0 rounded-2 text-light m-2 px-4 py-1' onClick={next}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    )
};
export default WPN_location;