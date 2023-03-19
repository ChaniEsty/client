import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Footer from './components/Footer';
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <><Header></Header><App /><Footer></Footer></>
  </React.StrictMode>
);

