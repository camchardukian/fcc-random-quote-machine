import React from 'react';
import QuoteBox from '../src/containers/QuoteBox';
import './App.scss';

function App() {
  return (
    <div className="app">
    <div className="main-content-container">
        <QuoteBox />
        <div>Created by Cameron Chardukian</div>
        </div>
    </div>
  );
}

export default App;
