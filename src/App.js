import React, { Component } from 'react';
import 'normalize.css';
import './css/App.css';
import './css/grid.css'
import Header from './component/Header';
import Features from './component/Features';
import FavMeals from './component/FavMeals';
import Tutorial from './component/Tutorial';
import Cities from './component/Cities';
import Testimonial from './component/Testimonial';

class App extends Component {
  render() {
    return (
       <div>
          <Header />
          <Features />
          <FavMeals />
          <Tutorial />
          <Cities />
          <Testimonial/>
       </div>
    );
  }
}

export default App;
