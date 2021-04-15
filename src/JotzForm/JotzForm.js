import React, { Component } from 'react';
import config from '../config';
import surfjotz1 from "../surfjotz1.jpeg"
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
  
    const jotz = {
      title: this.state.title,
      content: this.state.content,
      city: this.state.city,
   
      
    };


    fetch(`${config.API_ENDPOINT}/jotz/`,

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
      this.props.history.push("/list")
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  render() {
    return (
      <section className='add-jotz'>
<main>

<div className='jotz-form'>
<img src={surfjotz1} alt="man on beach" />
</div>
</main>

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

          <> Note
          <input
              type="text"
              className='input-jotz'
              placeholder='write jotz here'
              value={this.state.content}
              name='note'
              id='note'
              onChange={(event) => this.setState({ content: event.target.value })}
              required
            ></input></>
             <label> City
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
          <button className='note-button' type='submit'>Add A Jot</button>

        </form>
      </section>
    );
  }
}

export default JotzForm;