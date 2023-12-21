import { useEffect } from "react"
const RestaurantMenu = ()=>{
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu = async ()=>{
        
    }
    return (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>

            <ul>
                <li>Burgers</li>
                <li>Pizza</li>
                <li>Biriyani</li>
            </ul>
        </div>
    )
}