import { useState } from "react";
import DetailsTheme from "./DetailsTheme";
import Form from "react-bootstrap/Form";

function DetailsGuest({ display}) {

    console.log(display)
    
    return(
        <>
            <div style={{display}} className="border bg-secondary rounded-2 bg-opacity-10 col-md-7 shadow">
                <div className="row d-flex">
                    <div className="col-12">
                        <h3 className='ms-5 mt-4'>แขก</h3>
                    </div>
                    <div className='col d-flex flex-wrap justify-content-center'>
                        <div className="col-md-3 mx-3 mt-4">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>จำนวนแขก</Form.Label>
                                <Form.Control type="text" placeholder=""/>
                            </Form.Group>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='btnSkip border-0 rounded-2 text-light m-2 px-4 py-1 '>Skip</button>
                        <button className='btnNext border-0 rounded-2 text-light m-2 px-4 py-1 ' >Next</button>
                    </div>
                </div>
                
            </div>
        </>
    );
    
};
export default DetailsGuest;