import React, { Component } from 'react';
import config from '../config';

import './JotzForm.css';


class JotzForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      city: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //better to call payload instead of note
    const jotz = {
      title: this.state.title,
      content: this.state.content,
      city: this.state.city,
   
      
    };
    // console.log(note)

    fetch(`${config.API_ENDPOINT}/jotz/`,
    // note._id is what?
      {
        method: 'POST',
        body: JSON.stringify(jotz),
        headers: {
          'content-type': 'application/json',
        
        },
      })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((results) => {
        console.log(results);
        // window.location = '/';
        // where is the location for this?
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  render() {
    return (
      <section className='add-notes'>
        <form className='add-JotzForm' onSubmit={this.handleSubmit}>

          <label> Title
        <input
              type='text'
              className='input-title'
              placeholder='write title'
              value={this.state.title}
              name='title'
              id='title'
              onChange={(event) => this.setState({ title: event.target.value })}
              required
            /></label>

          <label> Note
          <input
              type="text"
              className='input-note'
              placeholder='write notes here'
              value={this.state.content}
              name='note'
              id='note'
              onChange={(event) => this.setState({ content: event.target.value })}
              required
            />
              <input
              type="city"
              className='input-city'
              placeholder='city'
              value={this.state.city}
              name='city'
              id='city'
              onChange={(event) => this.setState({ city: event.target.value })}
              required
            />
          </label>
          <button className='note-button' type='submit'>Add Note</button>

        </form>
      </section>
    );
  }
}

export default JotzForm;