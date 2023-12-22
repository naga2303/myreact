import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
           // count: 0,
           userInfo:{
            login:"Dummy",
            events_url: "Dummy"
           }
            
        }
        console.log("child constructor")
    }

    async componentDidMount(){
        //API calls are executed in this method
        const data = await fetch('https://api.github.com/users/naga2303')
        const json = await data.json();

        this.setState({
            userInfo:json
        })
        
        console.log(json)
        console.log("Child componentDidMount")

    }
    componentDidUpdate(){
        console.log("compnent did update")
    }

    render(){
        const {login, events_url}= this.state.userInfo;
        console.log("Child Render")
        //const {name, place, products} = this.props;
        //const {count,count2} = this.state
        return (
            <div className="userCards">
                <h3>CompanyName : {login}</h3>
                <h3>Site : {events_url}</h3>
                 
                
                
            </div>
        )
    }
}

export default UserClass;




/**
 * First Phase 
 * -----Mounting------
 * Constructor(dummy)
 * render (dummy)
 *  <HTML Dummy>
 * Component Did Mount
 *  <Api Call>
 *  <this.State> --> State variable is updated
 * 
 * Second Phase
 * ---------Updating--------
 * 
 *  render(Api data)
 *  <Html (new API data)
 *  componentDidUpdate
 */