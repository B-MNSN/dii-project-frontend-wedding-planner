import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import imgWedding from '../image/wedding.jpg';
import axios from "axios";

function Home() {
    const [token, setToken] = useState(localStorage.getItem("status"));

    if(!token){
        window.location.href='/login'
    }

    useEffect(() => {
        async function  getUser(){
            try{
                const user = await axios.get('http://localhost:4001/login/getuser',{
                    headers: {
                        'token': token
                    }
                });
                setToken(user.data)
            }catch (error){
                console.error(error)
            }
        };
        getUser();
    },[]);

    return(
        <>
            <Navbar/>
            <div className=''>
                <img src={imgWedding} class="imgWedding" alt="imgWedding"/>
                <div className='m-5'>
                    <div className='row d-flex justify-content-center align-items-center '>
                        <div className="col-7 p-5">
                            <h3>Loveindeed The Wedding</h3>
                            <p className='mt-3'>Love Indeed ถือเป็นหนึ่งในเวดดิ้งแพลนเนอร์มืออาชีพ ที่มีชื่อเสียงเป็นที่รู้จักในวงการมานาน ทั้งยังมีประสบการณ์ผ่านการจัดงานแต่งงานให้กับคู่รักมาแล้วมากมาย หลากหลายรูปแบบ สร้างความประทับใจและการจดจำในรูปแบบการทำงาน One Stop Service จุดเด่นของ Love Indeed คือ การตอบโจทย์ที่ลูกค้าต้องการในงบประมาณที่จับต้องได้ และได้มากกว่าที่จินตนาการไว้ในหลากหลายแง่มุม</p>
                        </div>
                        <div className='col-5 p-5'>
                            <div class="ratio video">
                                <iframe src="https://www.youtube.com/embed/accQX8cGDNA" title="Loveindeed The Wedding" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 mb-5 d-flex justify-content-evenly'>
                    <div class="cardTheme card0 shadow">
                        <div class="borderCard d-flex align-items-start flex-column m-3">
                            <div className='nameTheme mb-auto m-2 rounded-4 px-4'>
                                <h5 className='text-light'>ทะเล</h5>
                            </div>
                            <div class="text-light m-3">
                                Location
                            </div>
                        </div>
                    </div>
                    <div class="cardTheme card1 shadow">
                        <div class="borderCard d-flex align-items-start flex-column m-3">
                            <div className='nameTheme mb-auto m-2 rounded-4 px-4'>
                                <h5 className='text-light'>โรงแรม</h5>
                            </div>
                            <div class="text-light m-3">
                                Location
                            </div>
                        </div>
                    </div>
                    <div class="cardTheme card2 shadow">
                        <div class="borderCard d-flex align-items-start flex-column m-3">
                            <div className='nameTheme mb-auto m-2 rounded-4 px-4'>
                                <h5 className='text-light'>ภูเขา</h5>
                            </div>
                            <div class="text-light m-3">
                                Location
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    );
    
};
export default Home;
