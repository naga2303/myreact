import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";

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