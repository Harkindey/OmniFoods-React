import React, { Component } from 'react';
import Ionicon from 'react-ionicons'; 

const Footer = () => {
    return (
        <footer>
            <div class="row">
                <div className="col span-1-of-2">
                    <ul className="footer-nav">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">iOS App</a></li>
                        <li><a href="#">Android App</a></li>
                    </ul>
                </div>
                <div className="col span-1-of-2">
                    <ul className="social-links">
                        <li><a href="#"><Ionicon icon="logo-facebook" fontSize="24" color="#e67e22" style={styles.iconStyle} /></a></li>
                        <li><a href="#"><Ionicon icon="logo-twitter" fontSize="24" color="#e67e22" style={styles.iconStyle} /></a></li>
                        <li><a href="#"><Ionicon icon="logo-googleplus"fontSize="24" color="#e67e22" style={styles.iconStyle} /></a></li>
                        <li><a href="#"><Ionicon icon="logo-instagram"  fontSize="24" color="#e67e22" style={styles.iconStyle} /></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <p>
                    Copyright &copy; 2017 by Omnifood. All right reserved.
                </p>
            </div>
        </footer>
    )
}

const styles = {
    iconStyle:{
        
    }
}

export default Footer;