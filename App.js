import React from "react"
import ReactDOM from "react-dom/client"

//below using JSXElement
/*
const jsxHeading = <h1 id="Heading">"Using JSX"</h1>
const root = ReactDOM.createRoot(document.getElementById("root"))
*/
const Title =() =>(
    <h1 className="head">Component composition</h1>
)
//Javascript title
const title = (
    <h1 className="head">Component composition</h1>
)



//React functional component - below is the one way to introduce react element inside component
/*const HeadingComponent = ()=>(
    <div id="container">
    <Title/>
    <h1 id="Heading">RFC</h1>
    </div>
)*/

//Second method to define the const variable Title inside react component as javascript code
const HeadingComponent = ()=>(
    <div id="container">
    {title}
    {Title()}
    {<Title></Title>}
    {<Title/>}
    <h1 id="Heading">RFC</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)