
import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faPenSquare, faPen } from '@fortawesome/free-solid-svg-icons';
import ToDos from './containers/ToDos/ToDos';
import './App.css';

library.add(faTimesCircle, faPenSquare);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDos>

        </ToDos>
        <div style={{textAlign: 'center', color: 'whitesmoke', fontSize: '14px'}}><small>Press the text to edit - Press the icon to delete</small></div>
        <div style={{textAlign: 'center', color: 'whitesmoke', fontSize: '14px'}}><small>Made with ❤ by Syed Hasan</small></div>
      </div>
    );
  }
}

export default App;
