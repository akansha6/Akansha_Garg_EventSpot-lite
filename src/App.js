// src/App.js
import React from 'react';
import EventList from './components/EventList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>EventSpot Lite</h1>
        <p>Discover local events happening around you!</p>
      </header>
      <EventList />
    </div>
  );
}

export default App;