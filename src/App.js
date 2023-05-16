import React from 'react';
import GitHubSearch from './GitHubSearch';
import "./App.css"

const App = () => {
  return (
    <div id='cont'>
      <GitHubSearch />
      <div id='footer'>
          Mady with react by
          <a href='https://github.com/RamaSelvan'> Ramaselvan </a>
          <a href='https://github.com/TheDeveloperOps'> &   Bala Murugan </a> 
          
      </div>
    </div>
  );
};

export default App;
