import RestaurnantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = ()=>{
    return (
        <div className="Body">
            <div className="search">Search</div>
            <div className="res-container">
            {
                resList.map((restaurnant) =>(
                     <RestaurnantCard key={restaurnant.info.id} resData = {restaurnant} />     
            ))}   
            </div>
        </div>
    )
}
export default Body;