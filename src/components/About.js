import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component
{
    constructor(props){
        super(props)
        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent componentDidMount")
    }

    render(){
        console.log("Parent Render")
        return(
            <div>
            <h1>About Page</h1>
            <h2> This is my about page</h2>

        <UserClass name={"Volante Technologies"} place = {"Velachery"} products = {"designer, doc"}/>
        </div>
        );
        
    }
}

export default About;