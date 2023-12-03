import { CDN_URL } from "../utils/constants";


const RestaurnantCard = (props)=>{
    const {resData} = props;
    const {cloudinaryImageId,name, cuisines, avgRating, sla} = resData?.info
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
                className="res-logo" 
                alt="Foods"
                src = { CDN_URL +
                        cloudinaryImageId
                      }

                //src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hwbeetykbqbudvijg6yd"
            /> 
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h5>{avgRating}</h5>
            <h5>{ sla.deliveryTime} mins</h5>
        </div>
    );
};

export default RestaurnantCard;