import { CDN_URL } from "../utils/constants";


const RestaurnantCard = (props)=>{
    const {resData} = props;
    //console.log(resData.info.areaName)
    const {cloudinaryImageId,name, cuisines, avgRating, sla} = resData?.info
    return (
        <div className="res-card w-34 bg-pink-50 rounded-xl hover:bg-slate-400 justify-between">
            <img 
                className="res-logo rounded-lg" 
                alt="Foods"
                src = { CDN_URL +
                        cloudinaryImageId
                      }

                //src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hwbeetykbqbudvijg6yd"
            /> 
            <h3 className="text-lg text-blue-600">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h5>{avgRating}</h5>
            <h5>{ sla.deliveryTime} mins</h5>
        </div>
    );
};

//Higher order component

export const areaName = (RestaurnantCard)=>{
    return (props) =>{
        return(
        <div>
            <label className="bg-blue-300 shadow-lg text-black rounded-lg m-2 p-2">Avadi</label>
            <RestaurnantCard {...props}/>
        </div>
        )
    }
}

export default RestaurnantCard;