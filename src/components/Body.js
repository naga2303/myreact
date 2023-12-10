import RestaurnantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{
    const [listofRestaurants,setListofRestaurant] = useState([])

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1067448&lng=80.0969511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json()
        console.log(json)
        //optional chaining
        setListofRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if (listofRestaurants.length ===0){
        return <Shimmer/>
    }

    return (
        <div className="Body">
            <div className="filter">
            <button className="filter-btn"
            onClick={()=>{
                const filteredList = listofRestaurants.filter((res)=> res.info.avgRating > 4.1);
                setListofRestaurant(filteredList);
            }}>
                Top Rated Restaurant
                </button>
                </div>
            <div className="res-container">
            {
                listofRestaurants.map((restaurnant) =>(
                     <RestaurnantCard key={restaurnant.info.id} resData = {restaurnant} />     
            ))}   
            </div>
        </div>
    )
}
export default Body;