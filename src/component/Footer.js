import React, { Component } from 'react';

const Footer = () => {
    return (
        <footer className="section-footer">
            <div className="row">
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
                        <li><a href="#"><i class="ion-social-facebook" /></a></li>
                        <li><a href="#"><i class="ion-social-twitter" /></a></li>
                        <li><a href="#"><i class="ion-social-googleplus" /></a></li>
                        <li><a href="#"><i class="ion-social-instagram" /></a></li>
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