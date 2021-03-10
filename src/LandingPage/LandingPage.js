import React from 'react';
import './LandingPage.css';
// import { Link } from 'react-router-dom';

export default function LandingPage(props) {
  return (

    <main>
      <div className='landing-page'>
        <div className='landing-page-header'>
          <h1 className='landing-h1'>Surf Jotz</h1>

      
        </div>
        <div className='landing-page-content'>
          <p> Surf-Jotz helps you keep track of all your surfing details.Have a spot to avoid where all the groms hang? Need to remember where the best hidden spot is? Or just need to record the your gains? Then Surf-Jotz is for you!</p>
          <p> Log in to learn more about Surf Jotz and start Jotting the good stuff!
          </p>
        </div>

      </div>
    </main>
  );
}