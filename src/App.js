import React, { Component } from 'react';
import './css/App.css';
import './css/grid.css'
import Header from './component/Header';

class App extends Component {
  render() {
    return (
      <div className="row">
        <Header />
      </div>
    );
  }
}

export default App;
