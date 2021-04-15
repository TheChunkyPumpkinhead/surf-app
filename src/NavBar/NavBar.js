import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';



export default class NavBar extends React.Component {

 
 

  render() {
    return (
      <header className='nav-bar'>
        <nav className='nav-link'>
        <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
                <Link to='/add'>Create</Link>
                <Link to='/list'>Jotz</Link>
                
            </nav>
      </header>
    )
  }
}