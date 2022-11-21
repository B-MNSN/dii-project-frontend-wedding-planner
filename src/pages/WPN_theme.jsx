import { useState, useEffect } from "react";
import SelectStep from "../components/SelectSteap";
import Modal from '../components/modal/ModalTheme';
import Theme from '../components/detailList/Theme';
import axios from 'axios';
import Navbar from "../components/Navbar";
import { Link, useParams } from 'react-router-dom';

function WPN_theme(){
    const [modalShow, setModalShow] = useState(false);
    const [theme, setTheme] = useState([]);
    let {userid } = useParams();
    const [user, setUser] = useState();
    const [token, setToken] = useState(localStorage.getItem("status"));
    const [user_id,setuser_id] = useState('');

    useEffect(() => {
       async function getTheme(){
        try {
            const theme = await axios.get(
                `http://localhost:4001/theme`
            );
            setTheme(theme.data);
        } catch (error) {
            console.error(error);
        }
       };
       getTheme();

    }, []);

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
                console.log(user)
            }catch (error){
                console.error(error)
            }
        };
        getUser();
    },[]);

    const next = async (e) => {
        try {
            const trans = await axios.put(`http://localhost:4001/transaction/update/${user_id}?update=step`, {
                value: 3
                
            });
            console.log(trans);
            
        } catch (error) {
            console.error(error);
        }

    };

    return(
        <>  
            <Navbar/>
            <div className="d-flex justify-content-center mt-5 mx-5 row">
                <SelectStep/>
                <div className="border bg-secondary rounded-2 bg-opacity-10 col-md-7 shadow">
                    <div className="row d-flex">
                        <div className="col-12">
                            <h3 className='ms-5 mt-4'>ธีม</h3>
                        </div>
                        <div className='col d-flex flex-wrap ms-5'>
                            {theme.map((themes) => (
                                <Theme key={themes._id} theme={themes}/>
                            ))}
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button className='btnSkip border-0 rounded-2 text-light m-2 px-4 py-1'>Skip</button>
                            <Link to={`/WPN_location/${user_id}`}>
                                <button className='btnNext border-0 rounded-2 text-light m-2 px-4 py-1' onClick={next}>Next</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    )
};
export default WPN_theme;