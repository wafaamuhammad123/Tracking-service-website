import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Body from './components/body/body';
import Api from './components/api data/api';
import TrackingDetails from './components/api data/trackingDetails';
import { BrowserRouter as Router,Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
        <Body />
        <Api />
        <Footer />
     
      </div>
      </Router>
      
  
  );
}

export default App;
