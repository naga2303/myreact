import RestaurnantCard from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = ()=>{
    const [listofRestaurants,setListofRestaurant] = useState([])
    const [filteredRestaurant,setFilteredRestaurant] = useState([])

    const[searchText,setsearchText] = useState("")

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1067448&lng=80.0969511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json()
        console.log(json)
        //optional chaining
        setListofRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    //conditional rendering
   // if (listofRestaurants.length ===0){
     //   return <Shimmer />
    //}
    const onlineInfo = useOnlineStatus();

    if(onlineInfo === false) return <h1>Looks like your internet is off</h1>

    return listofRestaurants.length === 0 ?
    (
         <Shimmer/>
    )
    :(
        <div className="Body">
            <div className="bg-transparent flex ">
                <div className="search">
                    <input type="text" className="search-box border-solid" value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value)
                    }}
                    />
                    <button className="px-4" onClick={()=>{
                        const fileteredRestaurant=listofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                        setFilteredRestaurant(fileteredRestaurant)
                        console.log(searchText)
                    }}>Search</button>
                </div>
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
                filteredRestaurant.map((restaurnant) =>(
                    <Link 
                    key={restaurnant.info.id} 
                    to={"/restaurants/"+restaurnant.info.id}> <RestaurnantCard  resData = {restaurnant} /></Link>
            ))}   
            </div>
        </div>
    )
}
export default Body;