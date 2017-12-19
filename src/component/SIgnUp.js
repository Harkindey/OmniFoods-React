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
                            <p className="plan-price">$399 <span> / month</span></p>
                            <p className="plan-price-meal">That’s only 13.30$ per meal</p>
                        </div>
                        <div>
                            <ul>
                                <li><Ionicons icon="ios-checkmark" style={{}} fontSize="24" color="#e67e22" style={styles.iconStyle} />1 meal every day</li>
                                <li><Ionicons icon="ios-checkmark" style={{}} fontSize="24" color="#e67e22" style={styles.iconStyle} />Order 24/7</li>
                                <li><Ionicons icon="ios-checkmark" style={{}} fontSize="24" color="#e67e22" style={styles.iconStyle} />Access to newest creations</li>
                                <li><Ionicons icon="ios-checkmark" style={{}} fontSize="24" color="#e67e22" style={styles.iconStyle} />Free delivery</li>
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
                            <p className="plan-price">$149 <span> / month</span></p>
                            <p className="plan-price-meal">That’s only 14.90$ per meal</p>
                        </div>
                        <div>
                            <ul>
                                <li><Ionicons icon="ios-checkmark" style={{}} fontSize="24" color="#e67e22" style={styles.iconStyle} />1 meal 10 days/month</li>
                                <li><Ionicons icon="ios-checkmark" style={{}} fontSize="24" color="#e67e22" style={styles.iconStyle} />Order 24/7</li>
                                <li><Ionicons icon="ios-checkmark" style={{}} fontSize="24" color="#e67e22" style={styles.iconStyle} />Access to newest creations</li>
                                <li><Ionicons icon="ios-checkmark" style={{}} fontSize="24" color="#e67e22" style={styles.iconStyle} />Free delivery</li>
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
                            <p className="plan-price">$19 <span> / meal</span></p>
                            <p className="plan-price-meal">&nbsp;</p>
                        </div>
                        <div>
                            <ul>
                                <li><Ionicons icon="ios-checkmark" style={{}} fontSize="24" color="#e67e22" style={styles.iconStyle} />1 meal</li>
                                <li><Ionicons icon="ios-checkmark" style={{}} fontSize="24" color="#e67e22" style={styles.iconStyle} />Order 24/7</li>
                                <li><Ionicons icon="ios-close" style={{}} fontSize="24" color="#e67e22" style={styles.iconStyle} />Access to newest creations</li>
                                <li><Ionicons icon="ios-checkmark" style={{}} fontSize="24" color="#e67e22" style={styles.iconStyle} />Free delivery</li>
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

const styles = {
    iconStyle:{
        fontSize: "100%",
        textAlign: 'center',
        lineHeight: "120%",
        verticalAlign: 'middle',
        marginTop: "-6px",
        marginRight: "10px"
    }
}

export default SignUp;