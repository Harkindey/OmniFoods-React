import React, { Component } from 'react';
import 'normalize.css';
import './css/App.css';
import './css/grid.css'
import Header from './component/Header';
import Features from './component/Features';
import FavMeals from './component/FavMeals';

class App extends Component {
  render() {
    return (
       <div>
          <Header />
          <Features />
          <FavMeals />
       </div>
    );
  }
}

export default App;
