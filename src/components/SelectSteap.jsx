import { useState } from "react";
import Collapse from 'react-bootstrap/Collapse';
import DetailsGuest from './boxDetailList/DetailsGuest'
import DetailsFoods from "./boxDetailList/DetailsFoods";
import DetailsLocation from './boxDetailList/DetailsLocation';
import DetailsTheme from "./boxDetailList/DetailsTheme";
import DetailsDress from "./boxDetailList/DetailsDress";
import DetailsPhoto from "./boxDetailList/DetailsPhoto";
import DetailsCard from "./boxDetailList/DetailsCard";
import DetailsGift from "./boxDetailList/DetailsGift";

function SelectStep({foods, location, theme,dressWedding, photo, card, gift}) {
    const [open, setOpen] = useState(false);
    const [openLocation, setOpenLocation] = useState(false);
    
    const [display, setDisplay] = useState('');

    const onSelect = (event) => {
        setDisplay(event.target.innerText);
        console.log(event.target.innerText);
    };

    // if(!foods && !location && !theme && !dressWedding && !card && !photo && !card && !gift) return <></>

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
            <DetailsGuest display={display === 'แขก' ?  'block':'none' }/>
            <DetailsTheme theme={theme} display={display === 'ธีม' ? 'block' : 'none'}/>
            <DetailsFoods foods={foods} display={display === 'อาหาร' ? 'block' : 'none'} />
            <DetailsLocation location={location} display={display === 'สถานที่' ? 'block' : 'none'} />
            <DetailsDress dressWedding={dressWedding} display={display === 'ชุดแต่งงาน' ?  'block' : 'none'}/>
            <DetailsPhoto photo={photo} display={display === 'ถ่ายรูป Pre-wedding' ?  'block' : 'none'}/>
            <DetailsCard card={card} display={display === 'การ์ดแต่งงาน' ?  'block' : 'none'}/>
            <DetailsGift gift={gift} display={display === 'ของชำร่วย' ?  'block' : 'none'}/>
        </div>
        </>
    );
};

export default SelectStep;