import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './App.css';
import JotzFolder from './JotzFolder/JotzFolder';
import JotzForm from './JotzForm/JotzForm';
import LandingPage from "./LandingPage/LandingPage";
import AboutPage from './About/AboutPage';
import NavBar from './NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">

<BrowserRouter>
          <NavBar />
          <Switch>

          <Route path ="/" exact component ={LandingPage} /> 
          <Route path= "/about" component = {AboutPage} />
        <Route path="/add" component={JotzForm} />
        <Route path="/list" component={JotzFolder} /> 
        
        </Switch>
        </BrowserRouter>
        </div>
    );
  }
}

  

export default App;
