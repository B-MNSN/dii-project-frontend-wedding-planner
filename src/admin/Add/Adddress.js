import React, { useState } from "react"
import logo from "../../image/logo_cusu.png";
import { BiImageAdd } from "react-icons/bi";
import axios, { AxiosError } from "axios";
import { HiCheckCircle } from "react-icons/hi";

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
                                <a href="/Adminbar"><button class="btnCancel border-0 rounded-2 text-light m-2 px-4 py-1 btn-lg">Cancel</button></a>
                                <button type="button" class="btnConfirm border-0 rounded-2 text-light m-2 px-4 py-1 btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Confirm
                                </button>

                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Complete</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <h1><HiCheckCircle></HiCheckCircle></h1> 
                                            <div class="modal-body">
                                                คุณได้ทำการเพิ่มชุดแต่งงานเป็นที่เรียบร้อยแล้ว
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btnCancel border-0 rounded-2 text-light m-2 px-4 py-1 btn-lg" data-bs-dismiss="modal">Close</button>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}