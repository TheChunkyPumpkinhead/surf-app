import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './JotzForm.css';
import JotzApiService from '../services/jotz-api-service';


export default function JotzFolder(props) {
  return (


// export default class JotzForm extends Component {
//   static contextType = JotzContext;

//   handleSubmit = ev => {
//     ev.preventDefault();

//     const { title, content, date_published, city } = ev.target;
//     const jotz = {
//       title: title.value,
//       content: content.value,
//       date_published: date_published.value,
//       city: city.value,

//     };
//     JotzApiService.postJotz(jotz)
//       .then(this.context.addComment)
//       .then(() => {
//         title.value = '';
//       })
//       .catch(this.context.setError);
//   };

// render() {
//   return(


  main role = "main" >
      <header>
        <h1>Surf Jotz</h1>
      </header>
      <section>
        <form   onSubmit={handleSubmit} id="record-dream">
          <section class="form-section overview-section">
            <label for="surf-title">Info Title</label>
            <input type="text" name="title" placeholder="surf spot" required/>
          </section>
          <section class="form-section overview-section">
            <label for="surf-summary">Scribble some info</label>
            <textarea name="description" rows="15" required></textarea>
          </section>
          
    <section class="form-section">
            <label class="dsurf-date-label" for="date-month">Date of Info</label>
            <input type="date" name="date_published" id="date-month" placeholder="01" min="1" max="12" required=""/> .
            
          </section>
          <section class="button-section">
            <button type="submit">Submit</button>
            
          </section>
        </form>
      </section>
    </main>
 
);
}