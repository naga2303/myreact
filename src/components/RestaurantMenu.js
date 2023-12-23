import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"


const RestaurantMenu = ()=>{
    

    const {resId} = useParams();

    const resInfo = useRestaurantMenu();

    
    if(resInfo === null) return  <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards)
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join('')} - {costForTwoMessage}</p>
            

            <ul>
                {
                    itemCards.map(items =>
                        <li key={items.card.info.id} >{items.card.info.name} - Rs. {items.card.info.price /100 || items.card.info.defaultPrice / 100}</li>
                        //console.log(items.card.info.name)
                    )
                }
              
            </ul>
        </div>
    )
}
export default RestaurantMenu;