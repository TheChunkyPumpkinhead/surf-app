import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './JotzForm.css';


export default function JotzForm(props) {
  return (

  <main role="main">
      <header>
        <h1>Surf Jotz</h1>
      </header>
      <section>
        <form id="record-dream">
          <section class="form-section overview-section">
            <label for="surf-title">Info Title</label>
            <input type="text" name="dream-title" placeholder="surf spot" required/>
          </section>
          <section class="form-section overview-section">
            <label for="surf-summary">Scribble some info</label>
            <textarea name="surf info" rows="15" required></textarea>
          </section>
          
    <section class="form-section">
            <label class="dsurf-date-label" for="date-month">Date of Info</label>
            <input type="number" name="date-month" id="date-month" placeholder="01" min="1" max="12" required=""/> .
            <input type="number" name="date-day" class="date-day"  placeholder="06" min="1" max="31" required=""/> .
            <input type="number" name="date-year" class="date-year" placeholder="1900" min="2016" max="2017" required=""/>
          </section>
          <section class="button-section">
            <button type="submit">Submit</button>
            
          </section>
        </form>
      </section>
    </main>
 
);
}