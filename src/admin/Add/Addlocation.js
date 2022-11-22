import React, { useState , useRef } from "react"
import logo from "../../image/logo_cusu.png";
import { BiImageAdd } from "react-icons/bi";
import axios, { AxiosError } from "axios";
import { HiCheckCircle } from "react-icons/hi";

export default function Addlocation({ className }) {
    const [location_img, setLocationImg] = useState('');
    const [location_name, setLocationName] = useState('');
    const [location_province, setLocationProvider] = useState('');
    const [location_description, setLocationDescription] = useState('');
    const [location_price, setLocationPrice] = useState('');
    const inputFileRef = useRef(null)

    const handChange = (fn) => {
        return (event) => {
            fn(event.target.value);
        };
    };

    const onSubmit = async (e) => {
        try {
          e.preventDefault();
          const addLocation = await axios.post("http://localhost:4001/location", {
            location_img,
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

    const fileToBase64 = (filename, filepath) => {
        return new Promise((resolve) => {
            var file = new File([filename], filepath);
            var reader = new FileReader(); // Read file content on file loaded event
            reader.onload = function (event) {
                resolve(event.target.result);
            }; // Convert data to base64
            reader.readAsDataURL(file);
        });
    };
    const handleChange = async (e) => {
        setLocationImg(await fileToBase64(inputFileRef.current.files[0]))
    };

    return (
        <div className={className}>
            <form class=" background container-fluid text-center col-12" onSubmit={onSubmit}>
                <img src={logo} class="middle-logo col-4" alt="..." />
                <div class="box-add container justify-content-center shadow-sm p-2 mb-5  rounded ">
                    <h3 class=" py-3 fw-bolder d-flex justify-content-center ">สถานที่</h3>
                    <div class="border-top border-4 border-dark "></div>

                    <div class="col-12 d-flex justify-content-center">
                        <label for="addImgLocation" class="d-flex  justify-content-center align-items-center add-picture m-4 border border-dark border-2" type="button"><h1><BiImageAdd></BiImageAdd></h1></label>
                        <input id="addImgLocation" type="file" className='file' ref={inputFileRef} onChange={handleChange} />

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
                                                คุณได้ทำการเพิ่มสถานที่แต่งงานเป็นที่เรียบร้อยแล้ว
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

                </div>
            </form>
        </div>
    )
}