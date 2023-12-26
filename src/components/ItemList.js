import { CDN_URL } from "../utils/constants"

const ItemList = ({items})=>{
    console.log(items)
return(
    <div>
        {items.map((item)=>(
            <div key={item.card?.info?.id} className="m-2 p-2 border-y-red-100 border-b-2 text-left flex justify-between">
               
                <div className="w-9/12">
                <div className="py-2">
                
                    <span>{ item.card?.info?.name}</span>
                    <span className="text-xs">💲 { item.card?.info?.price/100}</span>
                    
                </div>
                <p className="text-xs">{item.card?.info?.description}</p>
                </div>
                <div  className="w-3/12 p-4">
                    <div className="absolute">
                    <button className="bg-white text-black rounded-sm mx-10 my-10">Add +</button>
                    </div>
                    <img src={CDN_URL + item.card?.info?.imageId}></img>
                </div>
        </div>
        ))}
    </div>
)
}

export default ItemList