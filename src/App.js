import React, { Component } from 'react';
import {Route } from 'react-router-dom';
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
          

          <Route path ="/" exact component ={LandingPage} /> 
        <Route path="/contact" component={SignUp} />
        <Route path="/add" component={JotzForm} />
        <Route path="/list" component={JotzFolder} /> 


          
     

      </div>
    );
  }
}

  

export default App;
