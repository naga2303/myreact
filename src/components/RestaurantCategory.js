import ItemList from "./ItemList";
const RestaurantCategory = ( {data, showItems, setShowIndex} )=> {
//console.log(data)
//const [showItems,setShowItems] = useState(false)

const handleClick =() =>{
 setShowIndex();
}

    return(
        <div>
            
            <div className="bg-blue-100 shadow-lg p-4 w-6/12 mx-auto my-4 ">
                <div 
                className="flex justify-between cursor-pointer" onClick={
                    handleClick
                }
                >
            <span>{data.title} ({data.itemCards.length})</span>
            <span>🔽</span>
             </div>
            { showItems && <ItemList items={data.itemCards} />}
             </div>
        </div>
    );
};

export default RestaurantCategory;