import { Component } from "react";
import HeroCard from "./HeroCard";

class HeroList extends Component {
    render(){
        const { selected } = this.props;
        let allHeroes = selected.map((hero, i)=>{
            return <HeroCard />
        })

        return(
            <div>
                null
            </div>
        )
    }
}

export default HeroList;