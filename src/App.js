import React from 'react';
import QuoteBox from '../src/containers/QuoteBox';
import './App.scss';
import {BrowserRouter as Router,} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="app">
    <div className="main-content-container">
        <QuoteBox />
        <div className="developer-credit">Created by Cameron Chardukian</div>
        </div>
    </div>
    </Router>
  );
}

export default App;
