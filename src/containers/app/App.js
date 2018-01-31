import React, { Component } from 'react';
import HomeContainer from '../home/HomeContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Yoga App</h1>
        </header>
        <HomeContainer />
      </div>
    );
  }
}

export default App;
