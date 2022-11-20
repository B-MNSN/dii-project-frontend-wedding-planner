import Modal from "./modal/ModalOrganize";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios, { AxiosError } from "axios";

function ResultWeddingPlanner() {
  const [modalShow, setModalShow] = useState(false);
  const { tran_id } = useParams();
    console.log(tran_id);
  const [transaction, setTransaction] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("status"));

  useEffect(() => {
        async function getTransaction(){
            try{
                const tran = await axios.get(`http://localhost:4001/transaction/${tran_id}`,{
                    headers: {
                        'token': token
                    }
                });
                setTransaction(tran.data)
            }catch (error){
                console.error(error)
            }
        };
        getTransaction();
  },[]);
  // console.log(transaction)

  return (
    <>
      <div className="border bg-secondary rounded-2 bg-opacity-10 w-75">
        <div className="m-5">
          <h2 className="mb-5">My Wedding PLanner</h2>
          <p>แขก: {transaction.guest} คน</p>
          <p>ธีม: {transaction.theme}</p>
          {/* <p>งาน: งานที่เลือก</p> */}
          <p>อาหาร: {transaction.food}</p>
          <p>สถานที่: {transaction.location}</p>
          <p>ชุดแต่งงาน: {transaction.dress}</p>
          <p>รูป pre-wedding: {transaction.photo}</p>
          <p>การ์ดแต่งงาน: {transaction.card}</p>
          <p>ของชำร่วย: {transaction.gift}</p>
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
