import React from "react"
import logo from "../../image/logo_cusu.png";
import { BiImageAdd } from "react-icons/bi";

export default function Editgift({ className }) {

    return (
        <div className={className}>
            <div class=" background container-fluid text-center col-12">
                <img src={logo} class="middle-logo col-4" alt="..." />
                <div class="box-add container justify-content-center shadow-sm p-2 mb-5 rounded ">
                    <h3 class=" py-3 fw-bolder d-flex justify-content-center ">ของชำร่วย</h3>
                    <div class="border-top border-4 border-dark "></div>

                    <div class="col-12 d-flex justify-content-center">
                        <button class="add-picture m-4" type="button"><h1><BiImageAdd></BiImageAdd></h1></button>

                        <div className="col-8">
                            <div class="m-4 d-flex justify-content-end">
                                <input type="text" class="  form-control q-text container-fluid" placeholder='ชื่อ-ของชำร่วย' id='title' required></input>
                            </div>

                            <div class="m-4 d-flex justify-content-end">
                                <input type="text" class="  form-control q-text container-fluid " placeholder='ชื่อร้าน-ของชำร่วย' id='title' required></input>
                            </div>

                            <div class="form-outline m-4 d-flex justify-content-end">
                                <textarea class="form-control" id="textAreaExample" rows="4" placeholder='รายละเอียด-ของชำร่วย'></textarea>
                            </div>

                            <div class="m-4 d-flex justify-content-end">
                                <input type="text" class="  form-control q-text container-fluid " placeholder='ราคา-ของชำร่วย' id='title' required></input>
                            </div>
                            <div class="d-flex m-4 d-flex justify-content-end">
                                <button type="button" class="btnConfirm border-0 rounded-2 text-light m-2 px-4 py-1 btn-lg">Confirm</button>
                                <button type="button" class="btnCancel border-0 rounded-2 text-light m-2 px-4 py-1 btn-lg">Cancel</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}