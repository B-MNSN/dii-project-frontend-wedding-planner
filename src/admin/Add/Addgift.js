import React, { useState } from "react"
import logo from "../../image/logo_cusu.png";
import { BiImageAdd } from "react-icons/bi";
import axios, { AxiosError } from "axios";

export default function Addgift({ className }) {
    const [gift_name, setGiftName] = useState('');
    const [gift_store, setGifsStore] = useState('');
    const [gift_description, setGiftDescription] = useState('');
    const [gift_price, setGiftPrice] = useState('');
    
    const handChange = (fn) => {
        return (event) => {
            fn(event.target.value);
        };
    };

    const onSubmit = async (e) => {
        try {
          e.preventDefault();
          const addGift = await axios.post("http://localhost:4001/gift", {
            gift_name,
            gift_store,
            gift_description,
            gift_price
          });
          console.log(addGift);
          localStorage.setItem("status", JSON.stringify(addGift.data.status));

        } catch (error) {
          console.error(error);
          if (error instanceof AxiosError) {
            console.error(error.message);
          }
        }
      };

    return (
        <div className={className}>
            <form class=" background container-fluid text-center col-12" onSubmit={onSubmit}>
                <img src={logo} class="middle-logo col-4" alt="..." />
                <div class="box-add container justify-content-center shadow-sm p-2 mb-5 rounded ">
                    <h3 class=" py-3 fw-bolder d-flex justify-content-center ">ของชำร่วย</h3>
                    <div class="border-top border-4 border-dark "></div>

                    <div class="col-12 d-flex justify-content-center">
                        <button class="add-picture m-4" type="button"><h1><BiImageAdd></BiImageAdd></h1></button>

                        <div className="col-8">
                            <div class="m-4 d-flex justify-content-end">
                                <input type="text" class="  form-control q-text container-fluid" placeholder='ชื่อ-ของชำร่วย' id='title' value={gift_name} onChange={handChange(setGiftName)}></input>
                            </div>

                            <div class="m-4 d-flex justify-content-end">
                                <input type="text" class="  form-control q-text container-fluid " placeholder='ชื่อร้าน-ของชำร่วย' id='title' value={gift_store} onChange={handChange(setGifsStore)}></input>
                            </div>

                            <div class="form-outline m-4 d-flex justify-content-end">
                                <textarea class="form-control" id="textAreaExample" rows="4" placeholder='รายละเอียด-ของชำร่วย' value={gift_description} onChange={handChange(setGiftDescription)}></textarea>
                            </div>

                            <div class="m-4 d-flex justify-content-end">
                                <input type="text" class="  form-control q-text container-fluid " placeholder='ราคา-ของชำร่วย' id='title' value={gift_price} onChange={handChange(setGiftPrice)}></input>
                            </div>
                            <div class="d-flex m-4 d-flex justify-content-end">
                            <a href="/Adminbar"><button class="btnCancel border-0 rounded-2 text-light m-2 px-4 py-1 btn-lg">Cancel</button></a>
                            <a href="/"><button class="btnConfirm border-0 rounded-2 text-light m-2 px-4 py-1 btn-lg">Confirm</button></a>   
                              
                            </div>

                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}