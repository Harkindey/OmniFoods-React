import React, { Component } from 'react';
import 'normalize.css';
import './css/App.css';
import './css/grid.css'
import Header from './component/Header';
import Features from './component/Features';

class App extends Component {
  render() {
    return (
       <div>
          <Header />
          <Features />
       </div>
    );
  }
}

export default App;
