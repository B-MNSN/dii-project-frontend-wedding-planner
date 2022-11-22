import { useState, useEffect } from "react";
import SelectStep from "../components/SelectSteap";
import axios from 'axios';
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function WPN_Guest(){
    const [guest, setGuest] = useState();
    const [theme, setTheme] = useState('');
    const [work, setWork] = useState('');
    const [food, setFood] = useState('');
    const [location, setLocation] = useState('');
    const [dress, setdress] = useState('');
    const [photo, setPhoto] = useState('');
    const [card, setCard] = useState('');
    const [gift, setGift] = useState('');

    const [user, setUser] = useState();
    const [token, setToken] = useState(localStorage.getItem("status"));
    const [user_id,setuser_id] = useState('');

    if(!token){
        window.location.href='/login'
    }


    const handChange = (fn) => {
        return (event) => {
          fn(event.target.value);
          console.log(event.target.value)
        };
    };

    useEffect(() => {
        async function  getUser(){
            try{
                const user = await axios.get('http://localhost:4001/login/getuser',{
                    headers: {
                        'token': token
                    }
                });
                setUser(user.data)
                setuser_id(user.data._id);
                console.log(user.data)
            }catch (error){
                console.error(error)
            }
        };
        getUser();
    },[]);

    console.log(user_id);

    const next = async (e) => {
        try{
            const transaction = await axios.post('http://localhost:4001/transaction', {
                user_id: user._id,
                guest: guest,
                theme,
                work,
                food,
                location,
                dress,
                photo,
                card,
                gift
        
            });
            console.log(transaction);
        } 
        catch (error){
            console.error(error);

        }
    };

    return(
        <>  <Navbar/>
            <div className="d-flex justify-content-center mt-5 mx-5 row">
                <SelectStep />
                <div className="border bg-secondary rounded-2 bg-opacity-10 col-md-7 shadow">
                    {/* <from className="row d-flex"> */}
                        <div className="col-12">
                            <h3 className='ms-5 mt-4'>แขก</h3>
                        </div>
                        <div className='col d-flex flex-wrap justify-content-center'>
                            <form className="col-md-3 mx-3 mt-4">
                                <div className="mb-3">
                                    <label>จำนวนแขก</label>
                                    <input type="text" placeholder="" onChange={handChange(setGuest)} className='border rounded-2 border-2'/>
                                </div>
                            </form>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <Link to={`/WPN_theme/${user_id}`} >
                                <button className='btnNext border-0 rounded-2 text-light m-2 px-4 py-1 ' onClick={next}>Next</button>
                            </Link>
                        </div>
                    {/* </from> */}
                    
                </div>
            </div>
        </>
    )
};
export default WPN_Guest;