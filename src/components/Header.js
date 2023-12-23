import { useState } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = ()=>{
    /*Here we have used const and it looks like we are changing the value, when we use the useState method, the whole header component is 
    rendered so the const variable is newly assigned with logout text. It does not affect the js rules.*/
    const [btnName,setbtnName] = useState("login")
    const onlineInfo = useOnlineStatus();
    return (
        <div className="header flex border-spacing-0 bg-blue-100 justify-between">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL}/>
            </div>
            <div className = "px-5">
                <ul className="flex text-lg text-right">
                    <li className="px-2">
                    online Status: {onlineInfo?":)":":("}
                    </li>
                    <li className="px-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-2">Cart</li>
                    <button className="login px-2" onClick={()=>{
                        btnName ==="login"?
                        setbtnName("logout"):setbtnName("login")
                    }}>{btnName}</button>
                </ul>

            </div>
        </div>
    )
};

export default Header;