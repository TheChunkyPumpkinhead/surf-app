import React, { Component } from 'react';
import {Route, Switch, } from 'react-router-dom';
import './App.css';
import JotzFolder from './JotzFolder/JotzFolder';
import JotzForm from './JotzForm/JotzForm';
import LandingPage from "./LandingPage/LandingPage";
import SignUp from './SignUp/SignUp';
import NavBar from './NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">

  
          <NavBar />
          <Switch>

          <Route path ="/" exact component ={LandingPage} /> 
        <Route path="/contact" component={SignUp} />
        <Route path="/add" component={JotzForm} />
        <Route path="/list" component={JotzFolder} /> 


          </Switch>
     

      </div>
    );
  }
}

  

export default App;
