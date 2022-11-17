import React, { useState } from "react"
import logo from "../../image/logo_cusu.png";
import { BiImageAdd } from "react-icons/bi";
import axios, { AxiosError } from "axios";

export default function Adddress({ className }) {
    const [dress_name, setDressName] = useState('');
    const [dress_description, setDressDescription] = useState('');
    const [dress_price, setDressPrice] = useState('');

    const handChange = (fn) => {
        return (event) => {
            fn(event.target.value);
        };
    };

    const onSubmit = async (e) => {
        try {
          e.preventDefault();
          const adddress = await axios.post("http://localhost:4001/dress", {
            dress_name,
            dress_description,
            dress_price
          });
          console.log(adddress);
          localStorage.setItem("status", JSON.stringify(adddress.data.status));

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
                    <h3 class=" py-3 fw-bolder d-flex justify-content-center ">ชุดแต่งงาน</h3>
                    <div class="border-top border-4 border-dark "></div>

                    <div class="col-12 d-flex justify-content-center">
                        <button class="add-picture m-4" type="button"><h1><BiImageAdd></BiImageAdd></h1></button>

                        <div className="col-8">
                            <div class="m-4 d-flex justify-content-end">
                                <input type="text" class="  form-control q-text container-fluid" placeholder='ชื่อ-ชุดแต่งงาน' id='title' value={dress_name} onChange={handChange(setDressName)}></input>
                            </div>
                            <div class="form-outline m-4 d-flex justify-content-end">
                                <textarea class="form-control" id="textAreaExample" rows="4" placeholder='รายละเอียด-ชุดแต่งงาน' value={dress_description} onChange={handChange(setDressDescription)}></textarea>
                            </div>

                            <div class="m-4 d-flex justify-content-end">
                                <input type="text" class="  form-control q-text container-fluid " placeholder='ราคา-ชุดแต่งงาน' id='title' value={dress_price} onChange={handChange(setDressPrice)}></input>
                            </div>
                            <div class="d-flex m-4 d-flex justify-content-end">
                            <button type="button" class="btnCancel border-0 rounded-2 text-light m-2 px-4 py-1 btn-lg">Cancel</button>
                            <button type="submit" class="btnConfirm border-0 rounded-2 text-light m-2 px-4 py-1 btn-lg">Confirm</button>
                              
                            </div>

                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}