import './index.css';
import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom';


// eslint-disable-next-line
ReactDOM.render( 
<BrowserRouter>
<App />
</BrowserRouter>,
document.getElementById('root')
);
