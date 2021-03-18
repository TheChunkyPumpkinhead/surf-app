import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';



export default class Landing extends Component {
  render() {
    return (

      <main>
        <section className='landing-overlay'>

          <div className='landing-page-header'>
            <h1 className='landing-h1'>Surf Jotz</h1>
          </div>


          <div className='landing-page-content'>
            <div className='landing-content-div'>

              <p> Surf-Jotz helps you keep track of all your surfing details.Have a spot to avoid where all the groms hang? Need to remember where the best hidden spot is? Or just need to record the your gains? Then Surf-Jotz is for you!</p>
              <p> Log in to learn more about Surf Jotz and start Jotting the good stuff!
          </p>
            </div>
            <Link to='/login'><button className='landing-btn'> Jotz Time</button> </Link>

          </div>
          </section>
    </main>
    
  );
}
}