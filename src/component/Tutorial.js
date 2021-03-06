import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class Tutorial extends Component {
    constructor() {
        super();
        this.state = {
            animateStyle : ''
        }
    }
    animite = () => {
        this.setState({
            animateStyle: 'animated fadeInUp'
        })
    }

    render () {
        return(
            <section className="section-steps">
                <div className="row">
                    <h2>How it works &mdash; Simple as 1, 2, 3</h2>
                </div>
                <div className="row">
                    <Waypoint onEnter={this.animite} bottomOffset="50%">
                        <div className="col span-1-of-2 steps-box">
                            <img src="./assets/app-iPhone.png" alt="Omnifood Iphone app" className={`app-screen js--wp-2 ${this.state.animateStyle}`}/>
                        </div>
                    </Waypoint>
                    <div className="col span-1-of-2 steps-box"> 
                        <div className="works-step">
                            <div>1</div>
                            <p>Choose the subscription plan that best fits your needs and sign up today</p>
                        </div>
                        <div className="works-step">
                            <div>2</div>
                                <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                        </div>
                        <div className="works-step">
                            <div>3</div>
                                <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
                        </div>
                        <a href="#" className="btn-app"><img src="./assets/download-app.svg" alt="App Store button"/></a>
                        <a href="#" className="btn-app"><img src="./assets/download-app-android.png" alt="Play Store button"/></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Tutorial;