import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

export default function SignUp(props) {
  return (


    <main role="main">
      <header>
        <h1>Drop Us Some Info</h1>
      </header>
      <section>
      
          <form class='signup-form'>
            <div>
              <label for="first-name">First name</label>
              <input placeholder='Johnny' type="text" name='first-name' id='first-name' />
            </div>
            <div>
              <label for="last-name">Last name</label>
              <input type="text" name='last-name' id='last-name' placeholder='Utah' />
            </div>
            <div>
              <label for="username">Email</label>
              <input type="text" name='username' id='username'placeholder='johnny_utah@FBI.com' />
            </div>
            
            <button type='submit'>Keep me in the Loop</button>
        </form>
       
        </section>
    </main>
);
}