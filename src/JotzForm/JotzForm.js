import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './JotzForm.css';
import JotzApiService from '../services/jotz-api-service';
// import JotzContext from '../services'





export default class JotzForm extends Component {
  // static contextType = JotzContext;

  handleSubmit = ev => {
    ev.preventDefault();

    const { title, content, date_published, city } = ev.target;
    const jotz = {
      title: title.value,
      content: content.value,
      date_published: date_published.value,
      city: city.value,

    };
    JotzApiService.postJotz(jotz)
      .then(this.context.addComment)
      .then(() => {
        title.value = '';
      })
      .catch(this.context.setError);
  };

render() {
  return(


  <main role = "main" >
      <header>
        <h1>Surf Jotz</h1>
      </header>
      <section>
        <form   onSubmit={this.handleSubmit} id="record-jotz">
          <section className="form-section overview-section">
            <label htmlFor="surf-title">Info Title</label>
            <input type="text" name="title" placeholder="surf spot" required/>
          </section>
          <section className="form-section overview-section">
            <label htmlFor="surf-city">City</label>
            <input type="text" name="city" placeholder="surf spot" required/>
          </section>



          <section className="form-section overview-section">
            <label  htmlFor="surf-summary">Scribble some info</label>
            <textarea name="content" rows="15" required></textarea>
          </section>
          
    <section class="form-section">
            <label className="dsurf-date-label" for="date-month">Date of Info</label>
            <input type="date" name="date_published" id="date-month" placeholder="01" min="1" max="12" required=""/> .
            
          </section>
          <section className="button-section">
            <button type="submit">Submit</button>
            
          </section>
        </form>
      </section>
    </main>
 
);
}}