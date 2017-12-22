import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import 'normalize.css';
import './css/App.css';
import './css/grid.css'
import './css/queries.css';
import './css/animate.css'
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
  componentDidMount(){
    console.log(this.refs)
  }

  scrollPlan = () => {
    scrollToComponent(this.refs.plan, {
      align: 'top',
      duration: 1000
    });
  }

  scrollStart = () => {
    scrollToComponent(this.refs.start, {
      align: 'top',
      duration: 1000
    });
  }

  scrollCities = () => {
    scrollToComponent(this.refs.cities, {
      align: 'top',
      duration: 1000
    });
  }

  scrollWorks = () => {
    scrollToComponent(this.refs.works, {
      align: 'top',
      duration: 1000
    });
  }
  

  render() {
    return (
       <div>
          <Header func ={[this.scrollPlan,this.scrollWorks, this.scrollCities, this.scrollStart]} />
          <Features ref='start' />
          <FavMeals />
          <Tutorial  ref="works"/>
          <Cities ref="cities" />
          <Testimonial/>
          <SignUp ref="plan"/>
          <ContactForm />
          <Footer />
       </div>
    );
  }
}

export default App;
