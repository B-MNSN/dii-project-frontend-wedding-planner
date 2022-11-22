function DetailModalOrg({orgName}) {
    // console.log(orgName);
    if(!orgName) return <></>

  return (
    <>
        <div className="col-md-4">
            <div className="d-flex justify-content-center">
                <img src={orgName.organiz_img} alt="check" width={150} height={150} className=" rounded-2 shadow-lg" />
            </div>
            <div className="d-flex justify-content-center mt-2">
                <p>{orgName.organiz_name}</p>
            </div>
        </div>
      
    </>
  );
}

export default DetailModalOrg;
