function DetailList({ display }) {
    const confirm = () => {
        window.location.href = '/my_wedding_planner';
    };
    console.log(display);
    
    return(
        <>
            <div style={{display }} className="border bg-secondary rounded-2 bg-opacity-10 col-md-8">
                <div className="row d-flex">
                    <div className="col-12">
                        <h3 className='ms-5 mt-4'>แขก</h3>
                    </div>
                    <div className='col d-flex flex-wrap justify-content-center'>
                    <div className="col-md-3 mx-3 mt-4">
                        <form>
                            <label>จำนวนแขก</label>
                            <input type="text" />
                        </form>
                    </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='btnSkip border-0 rounded-2 text-light m-2 px-4 py-1'>Skip</button>
                        <button className='btnNext border-0 rounded-2 text-light m-2 px-4 py-1' onClick={confirm}>Next</button>
                    </div>
                </div>
            </div>
        </>
    );
    
};
export default DetailList;