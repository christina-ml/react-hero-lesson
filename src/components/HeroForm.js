import { Component } from "react";

class HeroForm extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div id="hero-form">
                <form>
                    <div>
                        <label htmlFor="hero-select"></label>
                    </div>
                    <select name="hero-select" id="hero-select">
                        <option value="blank"></option>
                        <option value="Spider-Man">Spider-Man</option>
                        <option value="Hulk">Hulk</option>
                        <option value="Captain America">Captain America</option>
                        <option value="Black Widow">Black Widow</option>
                        <option value="Black Panther">Black Panther</option>
                        <option value="Thor">Thor</option>
                        <option value="Iron Man">Iron Man</option>
                        <option value="Vision">Vision</option>
                        <option value="Hawkeye">Hawkeye</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default HeroForm;