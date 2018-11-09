import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/chart';
import Api from './components/api';

class App extends Component {
  constructor(props) {
    super(props)
    var api = new Api();
    api.getSeasonsList();

  }

  render() {
    return (
      <div className="App">
        <Chart />
      </div>
    );
  }
}

/*
<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        */

export default App;
