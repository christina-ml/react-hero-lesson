import { Component } from "react";

class HeroCard extends Component{
    render(){
        return(
            <div className="heroCard">
                <h2>Name</h2>
                <p>Description</p>
                <img src="thumbnail" alt="name" />
            </div>
        )
    }
}

export default HeroCard;