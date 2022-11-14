import DetailList from "../components/DetailsList";
import Navbar from "../components/Navbar";
import SelectStep from "../components/SelectSteap";

function WeddingPlanner() {
    return(
        <>
            <Navbar/>
            <div className="d-flex justify-content-center mt-5 mx-5">
                <SelectStep/>
                <DetailList/>
            </div>
        </>
    );
    
};
export default WeddingPlanner;