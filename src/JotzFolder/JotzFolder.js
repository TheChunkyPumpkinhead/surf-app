import React from 'react';
import './JotzFolder.css';
import { Link } from 'react-router-dom';

export default function JotzFolder(props) {
  return (

   
   
    <main role="main">
      <header role="banner">
        <h1>Surf Jotz</h1>
      </header>
      <section>
        <header>
            <h2>Sweetest Spot Today</h2>
            <p>03.06.2021</p>
        </header>
        <blockquote>Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris. Donec elit lacus, dictum et placerat eget, rhoncus sodales erat. Curabitur sit amet placerat neque, a tempus mi. Suspendisse a tempus dolor. Nullam porttitor nisi sed justo dictum consequat. Etiam sed congue felis.</blockquote>
        
        <button>Edit</button>
        <button>Delete</button>
      </section>
      <section>
        <header>
            <h2>Gnar spot to avoid</h2>
            <p>11.27.2020</p>
        </header>
      </section>
      <section>
        <header>
            <h2>A vomit of surfers</h2>
            <p>09.26.2020</p>
        </header>
      </section>
    </main>
    
  

);
}