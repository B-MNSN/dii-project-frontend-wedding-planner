import Modal from "./modal/ModalOrganize";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios, { AxiosError } from "axios";
import ModalOrganize from "./modal/ModalOrganize";

function ResultWeddingPlanner() {
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("status"));
  const { userid } = useParams();
  const [transaction, setTransaction] = useState();
  const [oganize, setOganize] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [orgName, setOrgName] = useState([]);
  const [matchOrg, setMatchOrg] = useState([]);
  let arr =[];
  
  // console.log(userid);

  if(!token){
    window.location.href='/loging'
  }
  useEffect(() => {
    async function getTransaction(){
        try{
            const tran = await axios.get(`http://localhost:4001/transaction/getuser/${userid}`,{
                headers: {
                    'token': token
                }
            });
            setTransaction(tran.data[0])
            // console.log(tran)

        }catch (error){
            console.error(error)
        }
    };
    getTransaction();
  },[]);

  useEffect(() => {
    async function getOganize(){
        try{
            const oganize = await axios.get(`http://localhost:4001/organiz`,{
                headers: {
                    'token': token
                }
            });
            setOganize(oganize.data)

        }catch (error){
            console.error(error)
        }
    };
    getOganize();
},[]);

  useEffect(() => {
    const budget = () => {
        const result = (transaction.theme_price+transaction.location_price+transaction.dress_price+transaction.photo_price)+(transaction.guest*(transaction.food_price+transaction.card_price+transaction.gift_price));
        setTotalPrice(result);    
    };
    const checkOrg = () => {
      for(let i=0; i<oganize.length; i++){
        if(transaction.theme === oganize[i].organiz_theme && transaction.food === oganize[i].organiz_food && transaction.location === oganize[i].organiz_location && transaction.dress === oganize[i].organiz_dress && transaction.photo === oganize[i].organiz_photo && transaction.gift === oganize[i].organiz_gift && transaction.card === oganize[i].organiz_card){
          // console.log(oganize[i]);
          arr.push(oganize[i]);
          setOrgName(arr);

        }
      } 
  }
    if(transaction){
      budget();
      checkOrg();
    }
  },[transaction]);


  // console.log(orgName)
  
  if(!transaction ) return <></>

  return (
    <>
      <div className="border bg-secondary rounded-2 bg-opacity-10 w-50 mb-5 shadow">
        <div className="m-5">
          <h2 className="mb-5">My Wedding PLanner</h2>
          <p><strong>แขก:</strong> {transaction.guest} คน</p>
          <p><strong>ธีม:</strong> {transaction.theme}</p>
          {/* <p><strong>งาน:</strong> งานที่เลือก</p> */}
          <p><strong>อาหาร:</strong> {transaction.food}</p>
          <p><strong>สถานที่:</strong> {transaction.location}</p>
          <p><strong>ชุดแต่งงาน:</strong> {transaction.dress}</p>
          <p><strong>รูป pre-wedding:</strong> {transaction.photo}</p>
          <p><strong>การ์ดแต่งงาน:</strong> {transaction.card}</p>
          <p><strong>ของชำร่วย:</strong> {transaction.gift}</p>
          <div className="d-flex justify-content-between">
            <p><strong>งบประมาณการจัดงาน</strong></p>
            <div className="border px-5 rounded-2">{totalPrice} บาท</div>
          </div>
          <div className='col d-flex justify-content-end mt-3'>
                <button className='btnSkip border-0 rounded-2 text-light m-2 px-4 py-1'>Cancel</button>
                <button className='btnNext border-0 rounded-2 text-light m-2 px-4 py-1' onClick={() => setModalShow(true)}>Next</button>
          </div>
        </div>
      </div>
      <Modal show={modalShow} onHide={() => setModalShow(false) } orgName={orgName}/>
    </>
  );
}

export default ResultWeddingPlanner
