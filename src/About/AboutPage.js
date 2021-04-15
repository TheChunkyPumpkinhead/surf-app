import React from 'react';
import './AboutPage.css';
import jotzimage3 from "../images/jotzimage3.jpeg"





export default function AboutPage(props) {
  return (
    <main>
      <div className='about-page'>

        
          <h1>What is Surf Jotz?</h1>
          <img src={jotzimage3} alt="man with hat on beach"/>
        

        <section className='about-page-section'>

          <div className='about-paragraph'>
            <p> Surf-Jotz helps you keep track of all your surfing details.Have a spot to avoid where all the groms hang? Need to remember where the best hidden spot is? Or just need to record the your gains? Then Surf-Jotz is for you! 
        </p>
          </div>

          <div className='about-paragraph-2'>
            <p>The key to Surf-Jotz is to consistently document your surf spots, special spots or any other info you or others could use to have a great surf adventure. Surf-Jotz provides you with a quick and simple interface that helps you keep track of  all your surf related stuff.
        </p>
          </div>

        </section>

      </div>
    </main>
  );
}