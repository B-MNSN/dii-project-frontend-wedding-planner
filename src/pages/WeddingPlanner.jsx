import DetailList from "../components/DetailsFoods";
import Navbar from "../components/Navbar";
import SelectStep from "../components/SelectSteap";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import DetailsFoods from "../components/DetailsFoods";

function WeddingPlanner() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        async function getFood(){
            const foods = await axios.get(
                `http://localhost:4001/food`
            );
            setFoods(foods.data);
        };
        getFood();
    },[]);
    // console.log(foods);
    return(
        <>
            <Navbar/>
            <div className="d-flex justify-content-center mt-5 mx-5">
                <SelectStep/>
                <DetailsFoods foods={foods}/>
            </div>
        </>
    );
    
};
export default WeddingPlanner;