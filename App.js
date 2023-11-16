import React from "react"
import ReactDOM from "react-dom/client"

/** To create food website
 * Header
 *  Logo
 *  Nav Items
 * Body
 *  -Search
 *  -Restaurant Container
 *      Restaurnant cards
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contacts
 * 
 */
const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"/>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurnantCard = ()=>{
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
                className="res-logo" 
                alt="Foods"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hwbeetykbqbudvijg6yd"
            />
            <h3>Buhari</h3>
            <h4>Biriyani, North Indian</h4>
            <h5>4.3 stars</h5>
            <h5>38 mins</h5>
        </div>
    );
};

const Body = ()=>{
    return (
        <div className="Body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurnantCard />
                <RestaurnantCard />
                <RestaurnantCard />
                <RestaurnantCard />
                <RestaurnantCard />
                <RestaurnantCard />
                <RestaurnantCard />
                <RestaurnantCard />               
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)