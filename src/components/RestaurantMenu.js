import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";



const RestaurantMenu = ()=>{
    
    

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null)
    
    if(resInfo === null) return  <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const resCategories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
        c.card?.["card"]?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    //console.log(resCategories)
    
    return (
        <div className="menu shadow text-center my-2 py-2">
            <h1 className="font-bold text-2xl m-2 p-2">{name}</h1>
            <p className="font-bold text-lg ">{cuisines.join('')} - {costForTwoMessage}</p>
            {
                resCategories.map((resCategory,index)=>
                (
                <RestaurantCategory 
                key={resCategory.card.card.title}
                data = {resCategory.card?.card}
                showItems = {index === showIndex ? true: false}
                setShowIndex = {()=> setShowIndex(index)}
                />

                ))
            }
        </div>
    );
};
export default RestaurantMenu;