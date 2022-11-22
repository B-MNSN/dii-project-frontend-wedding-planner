import React, { useState, useRef  } from "react"
import logo from "../../image/logo_cusu.png";
import { BiImageAdd } from "react-icons/bi";
import axios, { AxiosError } from "axios";
import { HiCheckCircle } from "react-icons/hi";

export default function Addorganize({ className }) {
    const [organiz_img, setOrganizImg] = useState('');
    const [organiz_name, setOrganizName] = useState('');
    const [organiz_description, setOrganizDescription] = useState('');
    const [organiz_theme, setOrganizTheme] = useState('');
    const [organiz_food, setOrganizFood] = useState('');
    const [organiz_location, setOrganizLocation] = useState('');
    const [organiz_dress, setOrganizDress] = useState('');
    const [organiz_photo, setOrganizPhoto] = useState('');
    const [organiz_card, setOrganizCard] = useState('');
    const [organiz_gift, setOrganizGift] = useState('');
    const inputFileRef = useRef(null)
    
    const handChange = (fn) => {
        return (event) => {
            fn(event.target.value);
        };
    };

    const onSubmit = async (e) => {
        try {
          e.preventDefault();
          const addOrganize = await axios.post("http://localhost:4001/organiz", {
            organiz_img,
            organiz_name,
            organiz_description,
            organiz_theme,
            organiz_food,
            organiz_location,
            organiz_dress,
            organiz_photo,
            organiz_card,
            organiz_gift
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
        setOrganizImg(await fileToBase64(inputFileRef.current.files[0]))
    };

    return (
        <div className={className}>
            <form class=" background container-fluid text-center col-12" onSubmit={onSubmit}>
                <img src={logo} class="middle-logo col-4" alt="..." />
                <div class="box-add container justify-content-center shadow-sm p-2 mb-5 rounded ">
                    <h3 class=" py-3 fw-bolder d-flex justify-content-center ">องค์กร-บริษัท</h3>
                    <div class="border-top border-4 border-dark "></div>

                    <div class="col-12 d-flex justify-content-center">
                        <label for="addImgOrganize" class="d-flex  justify-content-center align-items-center add-picture m-4 border border-dark border-2" type="button"><h1><BiImageAdd></BiImageAdd></h1></label>
                        <input id="addImgOrganize" type="file" className='file' ref={inputFileRef} onChange={handleChange} />


                        <div className="col-8">
                            <div class="m-4 d-flex justify-content-end">
                                <input type="text" class="  form-control q-text container-fluid" placeholder='ชื่อ-องค์กร-บริษัท' id='title' value={organiz_name} onChange={handChange(setOrganizName)}></input>
                            </div>
                            <div class="form-outline m-4 d-flex justify-content-end">
                                <textarea class="form-control" id="textAreaExample" rows="4" placeholder='รายละเอียด-องค์กร-บริษัท' value={organiz_description} onChange={handChange(setOrganizDescription)}></textarea>
                            </div>
                            <div class="form-outline m-4 d-flex justify-content-end">
                                <input class="form-control" id="textAreaExample" rows="4" placeholder='ธีม' value={organiz_theme} onChange={handChange(setOrganizTheme)}></input>
                            </div>
                            <div class="form-outline m-4 d-flex justify-content-end">
                                <input class="form-control" id="textAreaExample" rows="4" placeholder='อาหาร' value={organiz_food} onChange={handChange(setOrganizFood)}></input>
                            </div>
                            <div class="form-outline m-4 d-flex justify-content-end">
                                <input class="form-control" id="textAreaExample" rows="4" placeholder='สถานที่' value={organiz_location} onChange={handChange(setOrganizLocation)}></input>
                            </div>
                            <div class="form-outline m-4 d-flex justify-content-end">
                                <input class="form-control" id="textAreaExample" rows="4" placeholder='ชุดแต่งงาน' value={organiz_dress} onChange={handChange(setOrganizDress)}></input>
                            </div>
                            <div class="form-outline m-4 d-flex justify-content-end">
                                <input class="form-control" id="textAreaExample" rows="4" placeholder='รูป pre wedding' value={organiz_photo} onChange={handChange(setOrganizPhoto)}></input>
                            </div>
                            <div class="form-outline m-4 d-flex justify-content-end">
                                <input class="form-control" id="textAreaExample" rows="4" placeholder='การ์ดแต่งงาน' value={organiz_card} onChange={handChange(setOrganizCard)}></input>
                            </div>
                            <div class="form-outline m-4 d-flex justify-content-end">
                                <input class="form-control" id="textAreaExample" rows="4" placeholder='ของชำร่วย' value={organiz_gift} onChange={handChange(setOrganizGift)}></input>
                            </div>
                           
                            <div class="d-flex m-4 d-flex justify-content-end">
                                <a href="/Adminbar"><button class="btnCancel border-0 rounded-2 text-light m-2 px-4 py-1 btn-lg">Cancel</button></a>
                                <button type="submit" class="btnConfirm border-0 rounded-2 text-light m-2 px-4 py-1 btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                                คุณได้ทำการเพิ่มการ์ดแต่งงานเป็นที่เรียบร้อยแล้ว
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