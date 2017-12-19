import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

const Cities = () => {
    return(
        <section classname="section-cities">
            <div className="row">
                <h2>We're currently in these cities</h2>
            </div>
            <div className="row">
                <div className="col span-1-of-4 box">
                    <img src="./assets/lisbon-3.jpg" alt="lisbon"/>
                    <h3>Lisbon</h3>
                    <div className="city-feature">
                        <Ionicon icon="ios-person" color="#e67e22" style={styles.iconStyle}/>
                        1600+ happy eaters
                    </div>
                    <div className="city-feature">
                        <Ionicon icon="ios-star" fontSize="24" color="#e67e22" style={styles.iconStyle}/>
                        60+ top chefs
                    </div>
                    <div className="city-feature">
                        <Ionicon icon="logo-twitter" fontSize="24" width="30" color="#e67e22" style={styles.iconStyle}/>
                        <a href="#">@omnifood_lx</a>
                    </div>
                </div>
                <div className="col span-1-of-4 box">
                    <img src="./assets/san-francisco.jpg" alt="San Francisco"/>
                    <h3>San Francisco</h3>
                    <div className="city-feature">
                        <Ionicon icon="ios-person" fontSize="24"color="#e67e22" style={styles.iconStyle}/>
                        3700+ happy eaters
                    </div>
                    <div className="city-feature">
                        <Ionicon icon="ios-star" fontSize="24" color="#e67e22" style={styles.iconStyle}/>
                        160+ top chefs
                    </div>
                    <div className="city-feature">
                        <Ionicon icon="logo-twitter" fontSize="24" color="#e67e22" style={styles.iconStyle}/>
                        <a href="#">@omnifood_sf</a> 
                    </div>
                </div>
                <div className="col span-1-of-4 box">
                    <img src="../assets/berlin.jpg" alt="Berlin"/>
                    <h3>Berlin</h3>
                    <div className="city-feature">
                        <Ionicon icon="ios-person" fontSize="24" color="#e67e22" style={styles.iconStyle}/>
                        2300+ happy eaters
                    </div>
                    <div className="city-feature">
                        <Ionicon icon="ios-star" fontSize="24" color="#e67e22" style={styles.iconStyle}/>
                        110+ top chefs
                    </div>
                    <div className="city-feature">
                        <Ionicon icon="logo-twitter" fontSize="24" color="#e67e22" style={styles.iconStyle}/>
                        <a href="#">@omnifood_berlin</a>
                    </div>
                </div>
                <div className="col span-1-of-4 box">
                    <img src="./assets/london.jpg" alt="London"/>
                    <h3>London</h3>
                    <div className="city-feature">
                        <Ionicon icon="ios-person" fontSize="24" color="#e67e22" style={styles.iconStyle}/>
                        1200+ happy eaters
                    </div>
                    <div className="city-feature">
                        <Ionicon icon="ios-star" fontSize="24" color="#e67e22" style={styles.iconStyle}/>
                        50+ top chefs
                    </div>
                    <div className="city-feature">
                        <Ionicon icon="logo-twitter" fontSize="24" color="#e67e22" style={styles.iconStyle}/>
                       <a href="#">@omnifood_london</a> 
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

export default Cities;