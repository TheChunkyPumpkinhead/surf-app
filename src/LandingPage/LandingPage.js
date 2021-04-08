import React from 'react';
import './LandingPage.css';
import {Link} from 'react-router-dom';


import surfjotz1 from "../surfjotz1.jpeg"

export default function LandingPage(props) {
  return (

    <main>
      <div className='landing-page'>
        <div className='landing-page-header'>
          <h1 className='landing-h1'>Surf Jotz</h1>

          <img src={surfjotz1} alt="pic" />
        </div>
        <div className='landing-page-content'>
          <p> Surf-Jotz helps you keep track of all your surfing details.Have a spot to avoid where all the groms hang? Need to remember where the best hidden spot is? Or just need to record the your gains? Then Surf-Jotz is for you! </p>
          <p>The key to Surf-Jotz is to consistently document your surf spots, special spots or any other info you or others could use to have a great surf adventure. Surf-Jotz provides you with a quick and simple interface that helps you keep track of  all your surf related stuff.
          </p>
          <Link to="/home"> Lest </Link>
        </div>

      </div>
    </main>
  );
}
// export default LandingPage;