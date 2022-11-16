import { useState } from "react";
import Collapse from 'react-bootstrap/Collapse';

function SelectStep() {
    const [open, setOpen] = useState(false);
    const [openLocation, setLocation] = useState(false);

    return(
        <>
            <div className="border bg-secondary rounded-2 bg-opacity-10 ">
                <div className="row m-4">
                    <div className="col-12 d-flex justify-content-center">
                        <h4>User name</h4>
                    </div>
                    <div className="col mt-4">
                        <ul className="p-0">
                            <li className="menulist rounded-4 ps-4 py-2">แขก</li>
                            <li className="menulist rounded-4 ps-4 py-2">ธีม</li>
                            <li className="menulist rounded-4 ps-4 py-2">งานเช้า/งานเย็น</li>
                            <li className="menulist rounded-4 ps-4 py-2" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" >อาหาร</li>
                            <Collapse in={open}>
                                <ul id="example-collapse-text p-3" className="mt-2 ms-3">
                                    <li className="menulist ps-4 py-2 rounded-4">ประเภทอาหาร</li>
                                    <li className="menulist ps-4 py-2 rounded-4">ร้านอาหาร</li>
                                </ul>
                            </Collapse>
                            <li className="menulist rounded-4 ps-4 py-2" onClick={() => setLocation(!openLocation)} aria-controls="example-collapse-text" >สถานที่</li>
                            <Collapse in={openLocation}>
                                <ul id="example-collapse-text p-3" className="mt-2 ms-3">
                                    <li className="menulist ps-4 py-2 rounded-4">Outdoor/Indoor</li>
                                    <li className="menulist ps-4 py-2 rounded-4">สถานที่</li>
                                </ul>
                            </Collapse>
                            <li className="menulist rounded-4 ps-4 py-2">ชุดแต่งงาน</li>
                            <li className="menulist rounded-4 ps-4 py-2">ถ่ายรูป Pre-wedding</li>
                            <li className="menulist rounded-4 ps-4 py-2">การ์ดแต่งงาน</li>
                            <li className="menulist rounded-4 ps-4 py-2">ของชำร่วย</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default SelectStep;