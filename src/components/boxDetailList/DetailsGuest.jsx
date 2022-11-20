import DetailsTheme from "./DetailsTheme";
import Form from "react-bootstrap/Form";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

function DetailsGuest({ display}) {
    const [guest, setGuest] = useState();
    const [theme, setTheme] = useState('');
    const [work, setWork] = useState('');
    const [food, setFood] = useState('');
    const [location, setLocation] = useState('');
    const [dress, setdress] = useState('');
    const [photo, setPhoto] = useState('');
    const [card, setCard] = useState('');
    const [gift, setGift] = useState('');

    const handChange = (fn) => {
        return (event) => {
          fn(event.target.value);
          console.log(event.target.value)
        };
    };

    const [user, setUser] = useState();
    const [token, setToken] = useState(localStorage.getItem("status"));

    useEffect(() => {
        async function  getUser(){
            try{
                const user = await axios.get('http://localhost:4001/login/getuser',{
                    headers: {
                        'token': token
                    }
                });
                setUser(user.data)
                console.log(user)
            }catch (error){
                console.error(error)
            }
        };
        getUser();
    },[]);

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
        <>
            <div style={{display}} className="border bg-secondary rounded-2 bg-opacity-10 col-md-7 shadow">
                <from className="row d-flex">
                    <div className="col-12">
                        <h3 className='ms-5 mt-4'>แขก</h3>
                    </div>
                    <div className='col d-flex flex-wrap justify-content-center'>
                        <Form className="col-md-3 mx-3 mt-4">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>จำนวนแขก</Form.Label>
                                <Form.Control type="text" placeholder="" onChange={handChange(setGuest)}/>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='btnSkip border-0 rounded-2 text-light m-2 px-4 py-1 '>Skip</button>
                        <button className='btnNext border-0 rounded-2 text-light m-2 px-4 py-1 ' onClick={next}>Next</button>
                    </div>
                </from>
                
            </div>
        </>
    );
    
};
export default DetailsGuest;