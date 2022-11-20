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

    const [active, setActive] = useState([true, true]);
    const [count, setCount] =useState(0);

    const onSelect = (event) => {
        setDisplay(event.target.innerText);
        console.log(event.target.innerText);
    };
    const selectFood = (event) => {
        setDisplay(event.target.innerText);
        setOpen(!open)
    }
    const selectLocation = (event) => {
        setDisplay(event.target.innerText);
        setOpenLocation(!openLocation)
    }

    


    return(
        <>
        <div className="d-flex justify-content-center mt-5 mx-5 row">
            <div className="border bg-secondary rounded-2 bg-opacity-10 col-md-4 shadow me-3">
                <div className="row m-4">
                    <div className="col-12 d-flex justify-content-center">
                        <h4>User name</h4>
                    </div>
                    <div className="col mt-4">
                        <ul className="p-0">
                            <li className={`menulist rounded-4 ps-4 py-2 ${display === 'แขก' ? 'menulistActive' : ''} `} onClick={onSelect}>แขก</li>
                            <li className={`menulist rounded-4 ps-4 py-2 ${display === 'ธีม' ? 'menulistActive' : ''} `}  onClick={onSelect}>ธีม</li>
                            <li className={`menulist rounded-4 ps-4 py-2 ${display === 'งานเช้า/งานเย็น' ? 'menulistActive' : ''} `} onClick={onSelect}>งานเช้า/งานเย็น</li>
                            <li className={`menulist rounded-4 ps-4 py-2 ${display === 'อาหาร' ? 'menulistActive' : ''} `} onClick={selectFood} aria-controls="example-collapse-text" >อาหาร</li>
                            <Collapse in={open}>
                                <ul id="example-collapse-text p-3" className="mt-2 ms-3">
                                    <li className={`menulist ps-4 py-2 rounded-4 ${display === 'ประเภทอาหาร' ? 'menulistActive' : ''} `}>ประเภทอาหาร</li>
                                    <li className={`menulist ps-4 py-2 rounded-4 ${display === 'ร้านอาหาร' ? 'menulistActive' : ''} `}>ร้านอาหาร</li>
                                </ul>
                            </Collapse>
                            <li className={`menulist rounded-4 ps-4 py-2 ${display === 'สถานที่' ? 'menulistActive' : ''} `} onClick={selectLocation} aria-controls="example-collapse-text" >สถานที่</li>
                            {/* <Collapse in={openLocation}>
                                <ul id="example-collapse-text p-3" className="mt-2 ms-3">
                                    <li className={`menulist ps-4 py-2 rounded-4 ${display === 'Outdoor/Indoor' ? 'menulistActive' : ''} `} onClick={onSelect}>Outdoor/Indoor</li>
                                    <li className={`menulist ps-4 py-2 rounded-4 ${display === 'สถานที่' ? 'menulistActive' : ''} `} onClick={onSelect}>สถานที่</li>
                                </ul>
                            </Collapse> */}
                            <li className={`menulist rounded-4 ps-4 py-2 ${display === 'ชุดแต่งงาน' ? 'menulistActive' : ''} `} onClick={onSelect}>ชุดแต่งงาน</li>
                            <li className={`menulist rounded-4 ps-4 py-2 ${display === 'ถ่ายรูป Pre-wedding' ? 'menulistActive' : ''} `} onClick={onSelect}>ถ่ายรูป Pre-wedding</li>
                            <li className={`menulist rounded-4 ps-4 py-2 ${display === 'การ์ดแต่งงาน' ? 'menulistActive' : ''} `} onClick={onSelect}>การ์ดแต่งงาน</li>
                            <li className={`menulist rounded-4 ps-4 py-2 ${display === 'ของชำร่วย' ? 'menulistActive' : ''} `} onClick={onSelect}>ของชำร่วย</li>
                        </ul>
                    </div>
                </div>
            </div>
            <DetailsGuest display={display === 'แขก' ? 'block' : 'none'}/>
            <DetailsTheme theme={theme} display={display === 'ธีม' ? 'block' : 'none'}/>
            <DetailsFoods foods={foods} display={display === 'อาหาร' ? 'block' : 'none'}/>
            <DetailsLocation location={location} display={display === 'สถานที่' ? 'block' : 'none'}/>
            <DetailsDress dressWedding={dressWedding} display={display === 'ชุดแต่งงาน' ?  'block' : 'none'}/>
            <DetailsPhoto photo={photo} display={display === 'ถ่ายรูป Pre-wedding' ?  'block' : 'none'}/>
            <DetailsCard card={card} display={display === 'การ์ดแต่งงาน' ?  'block' : 'none'}/>
            <DetailsGift gift={gift} display={display === 'ของชำร่วย' ?  'block' : 'none'}/>
        </div>
        </>
    );
};

export default SelectStep;