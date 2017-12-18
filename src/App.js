import React, { Component } from 'react';
import 'normalize.css';
import './css/App.css';
import './css/grid.css'
import Header from './component/Header';

class App extends Component {
  render() {
    return (
       <div>
          <Header />
       </div>
    );
  }
}

export default App;
