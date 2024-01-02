import UserClass from "./UserClass";
import {Component} from "react";
import userContext from "../utils/userContext";

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
            <div>
                LoggedIn user
                <userContext.Consumer>
                    {({loggedInUser}) =>(
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                    )}

                </userContext.Consumer>
            </div>
            <h2> This is my about page</h2>

        <UserClass name={"Volante Technologies"} place = {"Velachery"} products = {"designer, doc"}/>
        </div>
        );
        
    }
}

export default About;