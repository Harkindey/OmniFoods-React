import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class Cities extends Component {
    constructor() {
        super();
        this.state = {
            animateStyle : ''
        }
    }
    animite = () => {
        this.setState({
            animateStyle: 'animated fadeIn'
        })
    }

    render() {
        return(
            <section className="section-cities">
                <div className="row">
                    <h2>We're currently in these cities</h2>
                </div>
                <Waypoint onEnter={this.animite} bottomOffset="50%">
                    <div className={`row js--wp-3 ${this.state.animateStyle}`}>
                        <div className="col span-1-of-4 box">
                            <img src="./assets/lisbon-3.jpg" alt="lisbon"/>
                            <h3>Lisbon</h3>
                            <div className="city-feature">
                            <i className="ion-ios-person icon-small"></i>
                                1600+ happy eaters
                            </div>
                            <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                                60+ top chefs
                            </div>
                            <div className="city-feature">
                            <i className="ion-social-twitter icon-small"></i>
                                <a href="#">@omnifood_lx</a>
                            </div>
                        </div>
                        <div className="col span-1-of-4 box">
                            <img src="./assets/san-francisco.jpg" alt="San Francisco"/>
                            <h3>San Francisco</h3>
                            <div className="city-feature">
                            <i className="ion-ios-person icon-small"></i>
                                3700+ happy eaters
                            </div>
                            <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                                160+ top chefs
                            </div>
                            <div className="city-feature">
                            <i className="ion-social-twitter icon-small"></i>
                                <a href="#">@omnifood_sf</a> 
                            </div>
                        </div>
                        <div className="col span-1-of-4 box">
                            <img src="../assets/berlin.jpg" alt="Berlin"/>
                            <h3>Berlin</h3>
                            <div className="city-feature">
                            <i className="ion-ios-person icon-small"></i>
                                2300+ happy eaters
                            </div>
                            <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                                110+ top chefs
                            </div>
                            <div className="city-feature">
                            <i className="ion-social-twitter icon-small"></i>
                                <a href="#">@omnifood_berlin</a>
                            </div>
                        </div>
                        <div className="col span-1-of-4 box">
                            <img src="./assets/london.jpg" alt="London"/>
                            <h3>London</h3>
                            <div className="city-feature">
                            <i className="ion-ios-person icon-small"></i>
                                1200+ happy eaters
                            </div>
                            <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                                50+ top chefs
                            </div>
                            <div className="city-feature">
                            <i className="ion-social-twitter icon-small"></i>
                            <a href="#">@omnifood_london</a> 
                            </div>
                        </div>
                    </div>
                </Waypoint>
            </section>
        )
    }
}


export default Cities;