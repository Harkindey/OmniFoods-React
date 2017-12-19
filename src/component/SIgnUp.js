import React, { Component } from 'react';
import Ionicons from 'react-ionicons';

const SignUp = () => {
    return(
        <section className="section-plans">
            <div className="row">
                <h2>Start eating healthy today</h2>
            </div>
            <div className="row">
                <div className="col span-1-of-3">
                    <div className="plan-box">
                        <div>
                            <h3>Premium</h3>
                            <p className="plan-price">$399 / month</p>
                            <p className="plan-price-meal">That’s only 13.30$ per meal</p>
                        </div>
                        <div>
                            <ul>
                                <li><Ionicons icon="ios-checkmark" style={{}} />1 meal every day</li>
                                <li><Ionicons icon="ios-checkmark" style={{}} />Order 24/7</li>
                                <li><Ionicons icon="ios-checkmark" style={{}} />Access to newest creations</li>
                                <li><Ionicons icon="ios-checkmark" style={{}} />Free delivery</li>
                            </ul>
                        </div>
                        <div>
                            <a href="#" className="btn btn-full">Sign Up now</a>
                        </div>
                    </div>
                </div>
                <div className="col span-1-of-3">
                    <div className="plan-box">
                        <div>
                            <h3>Pro</h3>
                            <p className="plan-price">$149 / month</p>
                            <p className="plan-price-meal">That’s only 14.90$ per meal</p>
                        </div>
                        <div>
                            <ul>
                                <li><Ionicons icon="ios-checkmark" style={{}} />1 meal 10 days/month</li>
                                <li><Ionicons icon="ios-checkmark" style={{}} />Order 24/7</li>
                                <li><Ionicons icon="ios-checkmark" style={{}} />Access to newest creations</li>
                                <li><Ionicons icon="ios-checkmark" style={{}} />Free delivery</li>
                            </ul>
                        </div>
                        <div>
                            <a href="#" className="btn btn-ghost">Sign Up now</a>
                        </div>
                    </div>
                </div>
                <div className="col span-1-of-3">
                    <div className="plan-box">
                        <div>
                            <h3>Starter</h3>
                            <p className="plan-price">$19 / meal</p>
                            <p className="plan-price-meal">That’s only 13.30$ per meal</p>
                        </div>
                        <div>
                            <ul>
                                <li><Ionicons icon="ios-checkmark" style={{}} />1 meal</li>
                                <li><Ionicons icon="ios-checkmark" style={{}} />Order 24/7</li>
                                <li><Ionicons icon="ios-close" style={{}} />Access to newest creations</li>
                                <li><Ionicons icon="ios-checkmark" style={{}} />Free delivery</li>
                            </ul>
                        </div>
                        <div>
                            <a href="#" className="btn btn-ghost">Sign Up now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp;