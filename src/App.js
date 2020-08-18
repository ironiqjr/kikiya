import React from 'react';
import profileImage from './img/bubu.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome To My React App</h1>
      <img src= {profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
