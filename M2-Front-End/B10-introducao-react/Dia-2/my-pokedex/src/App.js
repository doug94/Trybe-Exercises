import './App.css';
import React from 'react';
import Title from './Title';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title mainTitle="Pokedex" />
        <Pokedex />
      </div>
    );
  }
}

export default App;
