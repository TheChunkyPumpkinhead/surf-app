import React from 'react';
import './JotzFolder.css';
import config from '../config';
import moment from "moment"



export default class  JotzFolder extends React.Component {
  state = {
    list:[]
  }
  componentDidMount (){
    fetch(`${config.API_ENDPOINT}/jotz/`,

      {
        method: 'GET',
       
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
      
        this.setState({
          list: results
        })
    
      })
      .catch((error) => {
        console.log({ error });
      });
  }

  render(){
  
  return (

   
   
    <main role="main">
      <header role="banner">
        <h1>Surf Jotz</h1>
      </header>
     
      {this.state.list.map(item=>(
        <section key={item.id}> 
        <header>
            <h2>{item.title}</h2>
            {moment(item.date_published).format("MM DD YYYY")}
            <p>
              {item.content}
            </p>
        </header>
      </section>
      ))}
      
      
    </main>
    
  

);
}
}