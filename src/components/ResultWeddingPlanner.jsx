import Modal from "./ModalOrganize";
import { useState } from "react";

function ResultWeddingPlanner() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="border bg-secondary rounded-2 bg-opacity-10 w-75">
        <div className="m-5">
          <h2 className="mb-5">My Wedding PLanner</h2>
          <p>ธีม: ธีมที่เลือก</p>
          <p>งาน: งานที่เลือก</p>
          <p>อาหาร: อาหารเลือก</p>
          <p>สถานที่: สถานที่ที่เลือก</p>
          <p>ชุดแต่งงาน: ชุดแต่งงานที่เลือก</p>
          <p>รูป pre-wedding: รายละเอียดรูป</p>
          <p>การ์ดแต่งงาน: การ์ดที่เลือก</p>
          <p>ของชำร่วย: ของที่เลือก</p>
          <div className="d-flex justify-content-between">
            <p>งบประมาณการจัดงาน</p>
            <div className="border px-4">x,xxxx,xxx บาท</div>
          </div>
          <div className='col d-flex justify-content-end mt-5'>
                <button className='btnSkip border-0 rounded-2 text-light m-2 px-4 py-1'>Skip</button>
                <button className='btnNext border-0 rounded-2 text-light m-2 px-4 py-1' onClick={() => setModalShow(true)}>Next</button>
          </div>
        </div>
      </div>
      <Modal show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  );
}

export default ResultWeddingPlanner;
