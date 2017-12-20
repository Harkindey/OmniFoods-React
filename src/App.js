import React, { Component } from 'react';
import 'normalize.css';
import './css/App.css';
import './css/grid.css'
import './css/queries.css';
import Header from './component/Header';
import Features from './component/Features';
import FavMeals from './component/FavMeals';
import Tutorial from './component/Tutorial';
import Cities from './component/Cities';
import Testimonial from './component/Testimonial';
import SignUp from './component/SignUp';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';

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
          <SignUp />
          <ContactForm />
          <Footer />
       </div>
    );
  }
}

export default App;
