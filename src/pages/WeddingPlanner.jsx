import Navbar from "../components/Navbar";
import SelectStep from "../components/SelectSteap";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import DetailsFoods from "../components/DetailsFoods";

function WeddingPlanner() {
    const [foods, setFoods] = useState([]);
    const [theme, setTheme] = useState([]);
    const [work, setWork] = useState([]);
    const [location, setLocation] = useState([]);
    const [dressWedding, setDressWedding] = useState([]);
    const [guest, setGuest] = useState([]);
    const [gift, setGift] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [card, setCard] = useState([]);

    useEffect(() => {
        async function getDetailList(){
            const foods = await axios.get(
                `http://localhost:4001/food`
            );
            setFoods(foods.data);

            const theme = await axios.get(
                `http://localhost:4001/theme`
            );
            setTheme(theme.data);

            const work = await axios.get(
                `http://localhost:4001/works`
            );
            setWork(work.data);

            const location = await axios.get(
                `http://localhost:4001/location`
            );
            setLocation(location.data);

            const dressWedding = await axios.get(
                `http://localhost:4001/dress`
            );
            setDressWedding(dressWedding.data);

            const gift = await axios.get(
                `http://localhost:4001/gift`
            );
            setGift(gift.data);

            const photo = await axios.get(
                `http://localhost:4001/photo`
            );
            setPhoto(photo.data);

            const card = await axios.get(
                `http://localhost:4001/card`
            );
            setCard(card.data);
        };
        getDetailList();
    },[]);
    // console.log(foods);
    return(
        <>
            <Navbar/>
            {/* <div className="d-flex justify-content-center mt-5 mx-5 row"> */}
                <SelectStep foods={foods} location={location}/>
                {/* <DetailsFoods foods={foods}/> */}
            {/* </div> */}
        </>
    );
    
};
export default WeddingPlanner;