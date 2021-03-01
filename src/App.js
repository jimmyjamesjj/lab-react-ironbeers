import React from 'react';
//import logo from './logo.svg';
import './App.css';


import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/NavBar';
import SingleBeer from './components/SingleBeer'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import Beers from './components/Beers'
import axios from 'axios'



class App extends React.Component {

  state = {
    Beers: []
  }
  componentDidMount(){
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response.data)
        this.setState({ Beers: response.data})
      })
      .catch(() => {
        console.log('Fecthing failed')
      })
  }

  render() {
    const {Beers} = this.state
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/SingleBeer"  />
        <Route path="/RandomBeer" />
        <Route path ="/NewBeer/:id" />
        <Route path="/Beers" component={Beers} />

      </Switch>
    </div>
  );
}
}
export default App