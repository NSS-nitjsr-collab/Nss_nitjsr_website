import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <AuthProvider>
 
        <BrowserRouter>
        {/* <React.StrictMode> */}
          <App />
        {/* </React.StrictMode> */}
        </BrowserRouter>
  
  // </AuthProvider>
  
  
);