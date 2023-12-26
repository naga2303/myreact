import { useState, useEffect } from "react"
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId)=>{
  
    const [resInfo,setRestInfo] = useState(null)

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch(MENU_API_URL+resId);
        const json = await data.json();
        setRestInfo(json.data)
    }

    return resInfo;
}

export default useRestaurantMenu;