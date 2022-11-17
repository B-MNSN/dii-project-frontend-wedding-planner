import React, { useState } from "react"
import logo from "../../image/logo_cusu.png";
import { BiImageAdd } from "react-icons/bi";
import axios, { AxiosError } from "axios";

export default function Addlocation({ className }) {
    const [location_name, setLocationName] = useState('');
    const [location_province, setLocationProvider] = useState('');
    const [location_description, setLocationDescription] = useState('');
    const [location_price, setLocationPrice] = useState('');

    const handChange = (fn) => {
        return (event) => {
            fn(event.target.value);
        };
    };

    const onSubmit = async (e) => {
        try {
          e.preventDefault();
          const addLocation = await axios.post("http://localhost:4001/location", {
            location_name,
            location_province,
            location_description,
            location_price
          });
          console.log(addLocation);
          localStorage.setItem("status", JSON.stringify(addLocation.data.status));

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
                <div class="box-add container justify-content-center shadow-sm p-2 mb-5  rounded ">
                    <h3 class=" py-3 fw-bolder d-flex justify-content-center ">สถานที่</h3>
                    <div class="border-top border-4 border-dark "></div>

                    <div class="col-12 d-flex justify-content-center">
                        <button class="add-picture m-4" type="button"><h1><BiImageAdd></BiImageAdd></h1></button>

                        <div className="col-8">
                            <div class="m-4 d-flex justify-content-end">
                                <input type="text" class="  form-control q-text container-fluid" placeholder='ชื่อ-สถานที่' id='title' value={location_name} onChange={handChange(setLocationName)}></input>
                            </div>
                            <div class="m-4 d-flex justify-content-end">
                                <input type="text" class="  form-control q-text container-fluid " placeholder='จังหวัด-สถานที่' id='title' value={location_province} onChange={handChange(setLocationProvider)}></input>
                            </div>
                            <div class="form-outline m-4 d-flex justify-content-end">
                                <textarea class="form-control" id="textAreaExample" rows="4" placeholder='รายละเอียด-สถานที่' value={location_description} onChange={handChange(setLocationDescription)}></textarea>
                            </div>

                            <div class="m-4 d-flex justify-content-end">
                                <input type="text" class="  form-control q-text container-fluid " placeholder='ราคา-สถานที่' id='title' value={location_price} onChange={handChange(setLocationPrice)}></input>
                            </div>
                            <div class="d-flex m-4 d-flex justify-content-end">
                                <button type="submit" class="btnConfirm border-0 rounded-2 text-light m-2 px-4 py-1 btn-lg">Confirm</button>
                                <button type="button" class="btnCancel border-0 rounded-2 text-light m-2 px-4 py-1 btn-lg">Cancel</button>
                            </div>

                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}