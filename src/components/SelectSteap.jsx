import { useState } from "react";
import Collapse from 'react-bootstrap/Collapse';
// import DetailsGuest from './boxDetailList/DetailsGuest'
// import DetailsFoods from "./boxDetailList/DetailsFoods";
// import DetailsLocation from './boxDetailList/DetailsLocation';
// import DetailsTheme from "./boxDetailList/DetailsTheme";
// import DetailsDress from "./boxDetailList/DetailsDress";
// import DetailsPhoto from "./boxDetailList/DetailsPhoto";
// import DetailsCard from "./boxDetailList/DetailsCard";
// import DetailsGift from "./boxDetailList/DetailsGift";
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import { useParams } from 'react-router-dom';

function SelectStep({onStep}) {
    const [open, setOpen] = useState(false);
    const [openLocation, setOpenLocation] = useState(false);
    
    const [display, setDisplay] = useState('แขก');

    const [token, setToken] = useState(localStorage.getItem("status"));
    // const { userid } = useParams();
    const [transaction, setTransaction] = useState();

    const [user, setUser] = useState();
    const [user_id,setuser_id] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        async function  getUser(){
            try{
                const user = await axios.get('http://localhost:4001/login/getuser',{
                    headers: {
                        'token': token
                    }
                });
                setUser(user)
                setuser_id(user.data._id);
                setUserName(user.data);
                console.log(userName)
            }catch (error){
                console.error(error)
            }
        };
        getUser();
    },[]);


    useEffect(() => {
        async function getTransaction(){
            try{
                const tran = await axios.get(`http://localhost:4001/transaction/getuser/${user_id}`,{
                    headers: {
                        'token': token
                    }
                });
                setTransaction(tran.data[0])

            }catch (error){
                console.error(error)
            }
        };
        getTransaction();
    },[]);

    // console.log(transaction)


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
            <div className="border bg-secondary rounded-2 bg-opacity-10 col-md-4 shadow me-3">
                <div className="row m-4">
                    <div className="col-12 d-flex justify-content-center">
                        <h4>{userName.user_name}</h4>
                    </div>
                    <div className="col mt-4">
                        <ul className="p-0">
                            <li className={`menulist rounded-4 ps-4 py-2 ${!onStep ? 'menulistActive' : 'menulistNotActive'} `} onClick={onSelect}>แขก</li>
                            <li className={`menulist rounded-4 ps-4 py-2 ${onStep === 2 ? 'menulistActive' : 'menulistNotActive'} `}  onClick={onSelect}>ธีม</li>
                            {/* <Link to="/WPN_Guest">
                                <li className={`menulist rounded-4 ps-4 py-2 ${display === 'งานเช้า/งานเย็น' ? 'menulistActive' : ''} `} onClick={onSelect}>งานเช้า/งานเย็น</li>
                            </Link> */}
                                <li className={`menulist rounded-4 ps-4 py-2 ${onStep === 3 ? 'menulistActive' : 'menulistNotActive'} `} onClick={onSelect} aria-controls="example-collapse-text" >อาหาร</li>
                                {/* <Collapse in={open}>
                                    <ul id="example-collapse-text p-3" className="mt-2 ms-3">
                                        <li className={`menulist ps-4 py-2 rounded-4 ${display === 'ประเภทอาหาร' ? 'menulistActive' : ''} `}>ประเภทอาหาร</li>
                                        <li className={`menulist ps-4 py-2 rounded-4 ${display === 'ร้านอาหาร' ? 'menulistActive' : ''} `}>ร้านอาหาร</li>
                                    </ul>
                                </Collapse> */}
                            <li className={`menulist rounded-4 ps-4 py-2 ${onStep === 4 ? 'menulistActive' : 'menulistNotActive'} `} onClick={onSelect} aria-controls="example-collapse-text" >สถานที่</li>
                                {/* <Collapse in={openLocation}>
                                    <ul id="example-collapse-text p-3" className="mt-2 ms-3">
                                        <li className={`menulist ps-4 py-2 rounded-4 ${display === 'Outdoor/Indoor' ? 'menulistActive' : ''} `} onClick={onSelect}>Outdoor/Indoor</li>
                                        <li className={`menulist ps-4 py-2 rounded-4 ${display === 'สถานที่' ? 'menulistActive' : ''} `} onClick={onSelect}>สถานที่</li>
                                    </ul>
                                </Collapse> */}
                            <li className={`menulist rounded-4 ps-4 py-2 ${onStep === 5 ? 'menulistActive' : 'menulistNotActive'} `} onClick={onSelect}>ชุดแต่งงาน</li>
                            <li className={`menulist rounded-4 ps-4 py-2 ${onStep === 6 ? 'menulistActive' : 'menulistNotActive'} `} onClick={onSelect}>ถ่ายรูป Pre-wedding</li>
                            <li className={`menulist rounded-4 ps-4 py-2 ${onStep === 7 ? 'menulistActive' : 'menulistNotActive'} `} onClick={onSelect}>การ์ดแต่งงาน</li>
                            <li className={`menulist rounded-4 ps-4 py-2 ${onStep === 8 ? 'menulistActive' : 'menulistNotActive'} `} onClick={onSelect}>ของชำร่วย</li>
                        </ul>
                    </div>
                </div>
            {/* <DetailsGuest display={display === 'แขก' ? 'block' : 'none'}/>
            <DetailsTheme theme={theme} display={display === 'ธีม' ? 'block' : 'none'}/>
            <DetailsFoods foods={foods} display={display === 'อาหาร' ? 'block' : 'none'}/>
            <DetailsLocation location={location} display={display === 'สถานที่' ? 'block' : 'none'}/>
            <DetailsDress dressWedding={dressWedding} display={display === 'ชุดแต่งงาน' ?  'block' : 'none'}/>
            <DetailsPhoto photo={photo} display={display === 'ถ่ายรูป Pre-wedding' ?  'block' : 'none'}/>
            <DetailsCard card={card} display={display === 'การ์ดแต่งงาน' ?  'block' : 'none'}/>
            <DetailsGift gift={gift} display={display === 'ของชำร่วย' ?  'block' : 'none'}/> */}
        </div>
        </>
    );
};

export default SelectStep;