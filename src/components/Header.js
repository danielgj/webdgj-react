import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

import i18n from './i18n';

import esIcon from '../img/es_flag.png';
import enIcon from '../img/uk_flag.png';

class Header extends React.Component {  
    
  render() {
      
    const lang = this.props.language;
    
    const t = i18n.getKey;

    const changeLang = this.props.changeLangFunc;
        return (
            <header>
                      <Navbar fixedTop className="navbar-expand-lg navbar-inverse">
                          <Navbar.Header>
                            <Navbar.Brand>
                              Daniel García Jones
                            </Navbar.Brand>
                          </Navbar.Header>
                          <Nav>
                            <NavItem eventKey={1}>
                              <Link to="/">{t(lang,"home")}</Link>
                            </NavItem>
                            <NavItem eventKey={2}>
                              <Link to="/lab">{t(lang,"lab")}</Link>
                            </NavItem>   
                            <NavItem eventKey={3}>
                              <Link to="/cv">{t(lang,"cv")}</Link>
                            </NavItem> 
                            <NavItem eventKey={4}>
                              <Link to="/blog">{t(lang,"blog")}</Link>
                            </NavItem> 
                            <NavItem eventKey={5}>
                              <Link to="/contact">{t(lang,"contact")}</Link>
                            </NavItem> 
                          </Nav>
                          <div className="flagsArea">
                              <img src={esIcon} alt={t(lang,"es")} title={t(lang,"es")} className="flag" onClick={() => changeLang('es')}/>
                              <img src={enIcon} alt={t(lang,"en")} title={t(lang,"en")} className="flag" onClick={() => changeLang('en')}/>
                          </div>                          
                      </Navbar>          
                </header>                             
        )
     
    
  }
}


export default Header;

