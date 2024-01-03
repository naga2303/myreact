import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Header = ()=>{
    /*Here we have used const and it looks like we are changing the value, when we use the useState method, the whole header component is 
    rendered so the const variable is newly assigned with logout text. It does not affect the js rules.*/
    const [btnName,setbtnName] = useState("login")
    const onlineInfo = useOnlineStatus();
    const { loggedInUser } = useContext(userContext);
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="header flex border-spacing-0 bg-blue-100 shadow-lg justify-between">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL}/>
            </div>
            <div className = "px-5">
                <ul className="flex text-lg text-right">
                    <li className="px-2">
                    online Status: {onlineInfo?":)":":("}
                    </li>
                    <li className="px-2 hover:bg-blue-400">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2 hover:bg-blue-400">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-2 hover:bg-blue-400">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                    <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                     </li>


                    <button className="login px-2 hover:bg-blue-400" onClick={()=>{
                        btnName ==="login"?
                        setbtnName("logout"):setbtnName("login")
                    }}>{btnName}</button>
                     <li className="px-4 ">{loggedInUser}</li>
                </ul>

            </div>
        </div>
    )
};

export default Header;