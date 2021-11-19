import { Component } from 'react';
import './App.css';
import superHeroes from './data/superHeroes';
import HeroForm from './components/HeroForm';
// import HeroList from './components/HeroList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      allSuperHeroes: superHeroes,
      selected: [],
    }
  }

  handleHeroSelect = (evt) => {
    console.log(evt);
  }

  render(){
    return (
      <div className="app">
        <HeroForm handleHeroSelect={this.handleHeroSelect}/>
      </div>
    );
  }
}

export default App;
