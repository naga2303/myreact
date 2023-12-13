import { useState } from "react";
import { LOGO_URL } from "../utils/constants"
const Header = ()=>{
    /*Here we have used const and it looks like we are changing the value, when we use the useState method, the whole header component is 
    rendered so the const variable is newly assigned with logout text. It does not affect the js rules.*/
    const [btnName,setbtnName] = useState("login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName ==="login"?
                        setbtnName("logout"):setbtnName("login")
                    }}>{btnName}</button>
                </ul>

            </div>
        </div>
    )
};

export default Header;