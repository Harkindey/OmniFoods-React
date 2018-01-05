import React,{ Component }  from 'react';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';

class Header extends Component {
    constructor(){
        super()
        this.state = {
            headerStyle : ''
        }
    }

    staySticky = (obj) => {
        this.setState({
            headerStyle: 'sticky'
        })
    }

    stickSticky = () => {
        this.setState({
            headerStyle: ''
        })
    }

    render() {
        return (
            <Waypoint onLeave={this.staySticky} onEnter={this.stickSticky} topOffset='60px' >
                <header >
                    <nav className={this.state.headerStyle}>
                        <div className="row">
                            <img src="./assets/logo-white.png" alt="Omnifood logo" className="logo"/>
                            <img src="./assets/logo.png" alt="Omnifood logo" className="logo-black"/>
                            <ul className="main-nav">
                                <li><a href='#' onClick={() => this.props.func[3]()}>Food delivery</a></li>
                                <li><a href="#" onClick={() => this.props.func[1]()}>How it works</a></li>
                                <li><a href="#" onClick={() => this.props.func[2]()}>Our cities</a></li>
                                <li><a href="#" onClick={() => this.props.func[0]()}>Sign up</a></li>
                            </ul>
                            <a className="mobile-nav-icon" onClick={this.iconAction}><i class="ion-navicon-round"></i></a>
                        </div>
                    </nav>
                    <div className="hero-text-box">
                        <h1>Goodbye junk food.<br/>Hello super healthy meals.</h1>
                        <a href="#" className="btn btn-full" onClick={() => this.props.func[0]()}>I’m hungry</a>
                        <a href="#" className="btn btn-ghost" onClick={() => this.props.func[3]()}>Show me more</a>
                    </div>
                </header>
            </Waypoint>
        )
    }
}

export default Header;
