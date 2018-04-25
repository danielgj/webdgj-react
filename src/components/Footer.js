import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import dgjIcon from '../img/dgj.png';
import twitterIcon from '../img/twitter.png';
import linkedinIcon from '../img/linkedin.png';
import githubIcon from '../img/github.png';


///////CSS
import '../css/App.css';

class Footer extends React.Component {
  render() {
    return (
      <Navbar fixedBottom className="navbar navbar-inverse">
        <div class="container">
            <div className="row">
                <div className="col">
                    <img src={dgjIcon} alt="Daniel Garcia Jones" title="Daniel Garcia Jones" className="img-circle footerImg"/>
                </div>
                <div className="col">
                    <p className="footerCopy text-center">&copy; 2018 Daniel García Jones</p>
                </div>
                <div className="col">
                    <p className="text-right">
                        <a href="https://github.com/danielgj" target="_blank"><img src={githubIcon} alt="Perfil Github" title="Perfil Github" className="socialIcon"/></a>
                        <a href="https://www.linkedin.com/in/dgarciaj/" target="_blank"><img src={linkedinIcon} alt="Perfil LinkedIn" title="Perfil LinkedIn" className="socialIcon"/></a>
                        <a href="https://twitter.com/danielgarjones/" target="_blank"><img src={twitterIcon} alt="Perfil Twitter" title="Perfil Twitter" className="socialIcon"/></a>
                    </p>
                </div>
            </div>
        </div>
        
      </Navbar>
    );
  }
}

export default Footer;