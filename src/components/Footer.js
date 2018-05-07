import React from 'react';

import { Navbar } from 'react-bootstrap';

import dgjIcon from '../img/dgj.png';
import twitterIcon from '../img/twitter.png';
import linkedinIcon from '../img/linkedin.png';
import githubIcon from '../img/github.png';



const Footer   = () => (
      <Navbar fixedBottom className="navbar navbar-inverse">
            <div className="row">
                <div className="col">
                    <img src={dgjIcon} alt="Daniel Garcia Jones" title="Daniel Garcia Jones" className="img-circle footerImg"/>
                </div>
                <div className="col">
                    <p className="footerCopy">&copy; 2018 Daniel García Jones</p>
                </div>
                <div className="col">
                    <p className="footerSocial">
                        <a href="https://github.com/danielgj" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="Perfil Github" title="Perfil Github" className="socialIcon"/></a>
                        <a href="https://www.linkedin.com/in/dgarciaj/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="Perfil LinkedIn" title="Perfil LinkedIn" className="socialIcon"/></a>
                        <a href="https://twitter.com/danielgarjones/" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="Perfil Twitter" title="Perfil Twitter" className="socialIcon"/></a>
                    </p>
                </div>
            </div>                        
      </Navbar>
)

export default Footer;