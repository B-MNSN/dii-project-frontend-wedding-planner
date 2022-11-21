import Modal from "./modal/ModalOrganize";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios, { AxiosError } from "axios";

function ResultWeddingPlanner() {
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("status"));
  const { userid } = useParams();
  const [transaction, setTransaction] = useState();

  useEffect(() => {
        async function getTransaction(){
            try{
                const tran = await axios.get(`http://localhost:4001/transaction/getuser/${userid}`,{
                    headers: {
                        'token': token
                    }
                });
                setTransaction(tran.data[0])
                console.log(transaction)

            }catch (error){
                console.error(error)
            }
        };
        getTransaction();
  },[]);

  // console.log(userid)
  console.log(transaction);

  return (
    <>
      <div className="border bg-secondary rounded-2 bg-opacity-10 w-50 mb-5 shadow">
        <div className="m-5">
          <h2 className="mb-5">My Wedding PLanner</h2>
          <p><strong>แขก:</strong> {transaction.guest} คน</p>
          <p><strong>ธีม:</strong> {transaction.theme}</p>
          <p><strong>งาน:</strong> งานที่เลือก</p>
          <p><strong>อาหาร:</strong> {transaction.food}</p>
          <p><strong>สถานที่:</strong> {transaction.location}</p>
          <p><strong>ชุดแต่งงาน:</strong> {transaction.dress}</p>
          <p><strong>รูป pre-wedding:</strong> {transaction.photo}</p>
          <p><strong>การ์ดแต่งงาน:</strong> {transaction.card}</p>
          <p><strong>ของชำร่วย:</strong> {transaction.gift}</p>
          <div className="d-flex justify-content-between">
            <p><strong>งบประมาณการจัดงาน</strong></p>
            <div className="border px-4">x,xxxx,xxx บาท</div>
          </div>
          <div className='col d-flex justify-content-end mt-3'>
                <button className='btnSkip border-0 rounded-2 text-light m-2 px-4 py-1'>Cancle</button>
                <button className='btnNext border-0 rounded-2 text-light m-2 px-4 py-1' onClick={() => setModalShow(true)}>Next</button>
          </div>
        </div>
      </div>
      <Modal show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  );
}

export default ResultWeddingPlanner;
