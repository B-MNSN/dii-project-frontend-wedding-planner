import Navbar from "../components/Navbar";
import ResultWeddingPlanner from "../components/ResultWeddingPlanner";

function MyWED(){
    return(
        <>
            <Navbar/>
            <div className="d-flex justify-content-center mt-5">
                <ResultWeddingPlanner/>
            </div>
            

        </>
    )
}
export default MyWED;