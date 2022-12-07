import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header-comp/Header';
import MainInfo from './components/MainInfo-comp/MainInfo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='main-content'>
   <Header />
   <MainInfo />
   </div>
  </React.StrictMode>
);


