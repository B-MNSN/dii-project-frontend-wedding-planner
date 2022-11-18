import { useState } from "react";
import Collapse from 'react-bootstrap/Collapse';
import DetailsFoods from "./DetailsFoods";
import DetailsLocation from './DetailsLocation';

function SelectStep({foods, location}) {
    const [open, setOpen] = useState(false);
    const [openLocation, setOpenLocation] = useState(false);
    
    const [display, setDisplay] = useState('');

    // const [foods, setFoods] = useState('');
    // const [theme, setTheme] = useState('');
    // const [work, setWork] = useState('');
    // const [location, setLocation] = useState('');
    // const [dressWedding, setDressWedding] = useState('');
    // const [guest, setGuest] = useState('');
    // const [gift, setGift] = useState('');
    // const [photo, setPhoto] = useState('');
    // const [card, setCard] = useState('');
    // const [modalShow, setModalShow] = useState(false);
    
    const onSelect = (event) => {
        setDisplay(event.target.innerText);
        console.log(event.target.innerText);
    };

    return(
        <>
        <div className="d-flex justify-content-center mt-5 mx-5 row">
            <div className="border bg-secondary rounded-2 bg-opacity-10 col-md-4">
                <div className="row m-4">
                    <div className="col-12 d-flex justify-content-center">
                        <h4>User name</h4>
                    </div>
                    <div className="col mt-4">
                        <ul className="p-0">
                            <li className="menulist rounded-4 ps-4 py-2" onClick={onSelect}>แขก</li>
                            <li className="menulist rounded-4 ps-4 py-2" onClick={onSelect}>ธีม</li>
                            <li className="menulist rounded-4 ps-4 py-2" onClick={onSelect}>งานเช้า/งานเย็น</li>
                            <li className="menulist rounded-4 ps-4 py-2" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" >อาหาร</li>
                            <Collapse in={open}>
                                <ul id="example-collapse-text p-3" className="mt-2 ms-3">
                                    <li className="menulist ps-4 py-2 rounded-4">ประเภทอาหาร</li>
                                    <li className="menulist ps-4 py-2 rounded-4">ร้านอาหาร</li>
                                </ul>
                            </Collapse>
                            <li className="menulist rounded-4 ps-4 py-2" onClick={() => setOpenLocation(!openLocation)} aria-controls="example-collapse-text" >สถานที่</li>
                            <Collapse in={openLocation}>
                                <ul id="example-collapse-text p-3" className="mt-2 ms-3">
                                    <li className="menulist ps-4 py-2 rounded-4" onClick={onSelect}>Outdoor/Indoor</li>
                                    <li className="menulist ps-4 py-2 rounded-4" onClick={onSelect}>สถานที่</li>
                                </ul>
                            </Collapse>
                            <li className="menulist rounded-4 ps-4 py-2" onClick={onSelect}>ชุดแต่งงาน</li>
                            <li className="menulist rounded-4 ps-4 py-2" onClick={onSelect}>ถ่ายรูป Pre-wedding</li>
                            <li className="menulist rounded-4 ps-4 py-2" onClick={onSelect}>การ์ดแต่งงาน</li>
                            <li className="menulist rounded-4 ps-4 py-2" onClick={onSelect}>ของชำร่วย</li>
                        </ul>
                    </div>
                </div>
            </div>
            <DetailsFoods foods={foods} display={display === 'แขก' ? 'block' : 'none'}/>
            <DetailsLocation location={location} display={display === 'สถานที่' ? 'block' : 'none'} />
        </div>
        </>
    );
};

export default SelectStep;