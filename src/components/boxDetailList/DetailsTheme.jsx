import Theme from '../detailList/Theme';
import { useEffect, useState } from "react";
import Modal from '../modal/ModalTheme';

function DetailsTheme({ theme, display }) {
    const [modalShow, setModalShow] = useState(false);

 
    if(!theme) return <></>



    return(
        <>
            <div style={{display }} className="border bg-secondary rounded-2 bg-opacity-10 col-md-7 shadow">
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
                        <button className='btnNext border-0 rounded-2 text-light m-2 px-4 py-1' >Next</button>
                    </div>
                </div>
            </div>
            <Modal show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    );
    
};
export default DetailsTheme;