import React, { useState, useRef  } from "react"
import logo from "../../image/logo_cusu.png";
import { BiImageAdd } from "react-icons/bi";
import axios, { AxiosError } from "axios";
import { HiCheckCircle } from "react-icons/hi";

export default function Addtheme({ className }) {
    const [theme_img, setThemeImg] = useState("");
    const [theme_name, setThemeName] = useState("");
    const [theme_description, setThemeDescription] = useState("");
    const [theme_price, setThemePrice] = useState("");
    const inputFileRef = useRef(null)

    const handChange = (fn) => {
        return (event) => {
            fn(event.target.value);
        };
    };
    let formData = new FormData();    //formdata object
    const onSubmit = async (e) => {
        try {
            
            formData.append("theme_img", theme_img);   //append the values with key, value pair
            formData.append("theme_name", theme_name);
            formData.append("theme_description", theme_description);
            formData.append("theme_price", theme_price);
            console.log(formData)
            e.preventDefault();
            const addTheme = await axios.post("http://localhost:4001/theme",{headers: { 'content-type': 'multipart/form-data' }}, {
                formData
            });
            console.log(addTheme);
            localStorage.setItem("status", JSON.stringify(addTheme.data.status));
            e.preventDefault();
            const addTheme = await axios.post("http://localhost:4001/theme", {
                theme_img,
                theme_name,
                theme_description,
                theme_price,
            });
            console.log(addTheme);
            localStorage.setItem("status", JSON.stringify(addTheme.data.status));

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
        setThemeImg(await fileToBase64(inputFileRef.current.files[0]))
    };
    // console.log(theme_img)

    };

    return (
        <div className={className}>
            <form class=" background container-fluid text-center col-12" onSubmit={onSubmit}>
                <img src={logo} class="middle-logo col-4" alt="..." />
                <div class="box-add container justify-content-center shadow-sm p-2 mb-5  rounded ">
                    <h3 class=" py-3 fw-bolder d-flex justify-content-center ">ธีม</h3>
                    <div class="border-top border-4 border-dark "></div>

                    <div class="col-12 d-flex justify-content-center">
                        <button class="add-picture m-4" type="button"><h1><BiImageAdd></BiImageAdd></h1>
                        <input type="file" name='file' ref={inputFileRef} onChange={handleChange} /></button>
                        <div className="col-8">
                            <div class="m-4 d-flex justify-content-end">
                                <input type="text" class="  form-control q-text container-fluid" placeholder='ชื่อ-ธีม' id='title' value={theme_name} onChange={handChange(setThemeName)}></input>
                            </div>

                            <div class="form-outline m-4 d-flex justify-content-end">
                                <textarea class="form-control" id="textAreaExample" rows="4" placeholder='รายละเอียด-ธีม' value={theme_description} onChange={handChange(setThemeDescription)}></textarea>
                            </div>

                            <div class="m-4 d-flex justify-content-end">
                                <input type="text" class="  form-control q-text container-fluid " placeholder='ราคา-ธีม' id='title' value={theme_price} onChange={handChange(setThemePrice)}></input>
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
                                                คุณได้ทำการเพิ่มธีมงานแต่งงานเป็นที่เรียบร้อยแล้ว
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