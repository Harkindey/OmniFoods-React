import React, { Component } from 'react';
import 'normalize.css';
import './css/App.css';
import './css/grid.css'
import Header from './component/Header';
import Features from './component/Features';
import FavMeals from './component/FavMeals';
import Tutorial from './component/Tutorial';

class App extends Component {
  render() {
    return (
       <div>
          <Header />
          <Features />
          <FavMeals />
          <Tutorial />
       </div>
    );
  }
}

export default App;
