import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";


import esIcon from '../img/es_flag.png';
import enIcon from '../img/uk_flag.png';

class Header extends React.Component {  
    
  constructor(props) {
     super(props);
  }
    
  render() {
      
    const lang = this.props.language;
    const changeLang = this.props.changeLangFunc;
      
    if(lang==="es") {
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
                              <Link to="/">Inicio</Link>
                            </NavItem>
                            <NavItem eventKey={2}>
                              <Link to="/lab">Laboratorio</Link>
                            </NavItem>   
                            <NavItem eventKey={3}>
                              <Link to="/cv">Curriculum</Link>
                            </NavItem> 
                            <NavItem eventKey={4}>
                              <Link to="/blog">Blog</Link>
                            </NavItem> 
                            <NavItem eventKey={5}>
                              <Link to="/contact">Contacto</Link>
                            </NavItem> 
                          </Nav>
                          <div className="flagsArea">
                              <img src={esIcon} alt="Español" title="Español" className="flag" onClick={() => changeLang('es')}/>
                              <img src={enIcon} alt="Inglés" title="Inglés" className="flag" onClick={() => changeLang('en')}/>
                          </div>                          
                      </Navbar>          
                </header>
                
        );    
    } else {
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
                              <Link to="/">Home</Link>
                            </NavItem>
                            <NavItem eventKey={2}>
                              <Link to="/lab">Lab</Link>
                            </NavItem>   
                            <NavItem eventKey={3}>
                              <Link to="/cv">Curriculum</Link>
                            </NavItem> 
                            <NavItem eventKey={4}>
                              <Link to="/blog">Blog</Link>
                            </NavItem> 
                            <NavItem eventKey={5}>
                              <Link to="/contact">Contact</Link>
                            </NavItem> 
                          </Nav>
                          <div className="flagsArea">
                              <img src={esIcon} alt="Spanish" title="Spanish" className="flag" onClick={() => changeLang('es')}/>
                              <img src={enIcon} alt="English" title="English" className="flag" onClick={() => changeLang('en')}/>
                          </div>
                      </Navbar>          
                </header>
                
        );
    }
     
    
  }
}


export default Header;

