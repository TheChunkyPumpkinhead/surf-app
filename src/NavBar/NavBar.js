import React from 'react';

import './NavBar.css';

export default function NavBar(props) {
  return (


    <main role="main">
      <header>
        <h1>Drop Us Some Info</h1>
      </header>
      <section>
      
          <form className='signup-form'>
            <div>
              <label htmlFor="first-name">First name</label>
              <input placeholder='Johnny' type="text" name='first-name' id='first-name' />
            </div>
            <div>
              <label htmlFor="last-name">Last name</label>
              <input type="text" name='last-name' id='last-name' placeholder='Utah' />
            </div>
            <div>
              <label htmlFor="username">Email</label>
              <input type="text" name='username' id='username'placeholder='johnny_utah@FBI.com' />
            </div>
            
            <button type='submit'>Keep me in the Loop</button>
        </form>
       
        </section>
    </main>
);
}