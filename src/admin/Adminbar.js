import React from "react"
import logo from "../image/logo_cusu.png";
import { ImOffice } from "react-icons/im";
import { HiCamera} from "react-icons/hi";
import { ImSpoonKnife} from "react-icons/im";
import {IoMdRibbon} from "react-icons/io";
import {IoIosShirt} from "react-icons/io";
import {IoMdContacts} from "react-icons/io";
import {IoMdExit} from "react-icons/io";
import {IoIosBowtie} from "react-icons/io";
import {IoIosEye} from "react-icons/io";
import {IoIosFiling} from "react-icons/io";

 export default function Adminbar({className }){
    
    return (
        <div className={className}>
          <div class=" background container-fluid text-center col-12">
          <img src={logo} class="" alt="..." />      
          <div class="container text-center col-12">
  <button class="botton-menu m-4" type="button"><h1><IoIosBowtie></IoIosBowtie></h1>ธีม</button>
  <button class="botton-menu m-4" type="button"><h1><ImSpoonKnife></ImSpoonKnife></h1>อาหาร</button>
  <button class="botton-menu m-4 " type="button"><h1><ImOffice></ImOffice></h1>สถานที่</button>
  <button class="botton-menu m-4" type="button"><h1><IoIosShirt></IoIosShirt></h1>ชุดแต่งงาน</button>
  <button class="botton-menu m-4" type="button"><h1><HiCamera></HiCamera></h1>ถ่ายรูป</button>
             </div>
             <div class="container-fluid text-center col-12">
  <button class="botton-menu m-4" type="button"><h1><IoIosFiling></IoIosFiling></h1>การ์ดแต่งงาน</button>
  <button class="botton-menu m-4" type="button"><h1><IoMdRibbon></IoMdRibbon></h1>ของชำร่วย</button>
  <button class="botton-menu m-4" type="button"><h1><IoMdContacts></IoMdContacts></h1>องค์กร</button>
  <button class="botton-menu m-4" type="button"><h1><IoIosEye></IoIosEye></h1>มุมมอง</button>
  <button class="botton-menu m-4" type="button"><h1><IoMdExit></IoMdExit></h1>ออกจากระบบ</button>
             </div>
             </div>
            </div>
    )
}

