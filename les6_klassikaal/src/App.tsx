// App.jsx

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Check REACT_APP_ENV to ensure we're in the Azure environment
  const env = process.env.REACT_APP_ENV;

  // Use hostname to detect if it's staging or production
  const isStaging = env === 'azure' && window.location.hostname.includes('staging'); // Adjust 'staging' based on your subdomain

  // Set background color based on environment
  const backgroundColor = isStaging ? 'red' : 'white';

  return (
    <div className="App" style={{ backgroundColor }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, React on Azure!</h1>
        <p>The background color changes based on the environment.</p>
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
