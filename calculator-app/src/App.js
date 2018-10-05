import React, { Component } from 'react';
// import Calculator from '..hoc/Calculator/Calculator.js';
import Calculator from '../src/containers/Calculator/Calculator';
import './App.css';

class App extends Component {
  render() {
    return (     
        <div>
          <Calculator />
        </div>
    );
  }
}

export default App;
