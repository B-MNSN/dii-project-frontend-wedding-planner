import React, { useState } from "react"
import logo from "../../image/logo_cusu.png";
import { BiImageAdd } from "react-icons/bi";
import axios, { AxiosError } from "axios";

export default function Addorganize({ className }) {
    const [organiz_name, setOrganizName] = useState('');
    const [organiz_description, setOrganizDescription] = useState('');
    
    const handChange = (fn) => {
        return (event) => {
            fn(event.target.value);
        };
    };

    const onSubmit = async (e) => {
        try {
          e.preventDefault();
          const addOrganize = await axios.post("http://localhost:4001/organiz", {
            organiz_name,
            organiz_description,
          });
          console.log(addOrganize);
          localStorage.setItem("status", JSON.stringify(addOrganize.data.status));

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
                    <h3 class=" py-3 fw-bolder d-flex justify-content-center ">องค์กร-บริษัท</h3>
                    <div class="border-top border-4 border-dark "></div>

                    <div class="col-12 d-flex justify-content-center">
                        <button class="add-picture m-4" type="button"><h1><BiImageAdd></BiImageAdd></h1></button>

                        <div className="col-8">
                            <div class="m-4 d-flex justify-content-end">
                                <input type="text" class="  form-control q-text container-fluid" placeholder='ชื่อ-องค์กร-บริษัท' id='title' value={organiz_name} onChange={handChange(setOrganizName)}></input>
                            </div>
                            <div class="form-outline m-4 d-flex justify-content-end">
                                <textarea class="form-control" id="textAreaExample" rows="4" placeholder='รายละเอียด-องค์กร-บริษัท' value={organiz_description} onChange={handChange(setOrganizDescription)}></textarea>
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