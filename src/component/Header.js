import React  from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="row">
                    <img src="./assets/logo-white.png" alt="Omnifood logo" className="logo"/>
                    <ul className="main-nav">
                        <li><a href='#'>Food delivery</a></li>
                        <li><a href="#">How it works</a></li>
                        <li><a href="#">Our cities</a></li>
                        <li><a href="#">Sign up</a></li>
                    </ul>
                </div>
            </nav>
            <div className="hero-text-box">
                <h1>Goodbye junk food.<br/>Hello super healthy meals.</h1>
                <a href="#" className="btn btn-full">I’m hungry</a>
                <a href="#" className="btn btn-ghost">Show me more</a>
            </div>
        </header>
    )
}

export default Header;
