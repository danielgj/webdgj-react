import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

///////CSS
import '../css/App.css';

class Header extends React.Component {  
    
  
    
  render() {
      
     
    return (
      <header>
          <Navbar fixedTop className="navbar-expand-lg navbar-inverse">
              <Navbar.Header>
                <Navbar.Brand>
                  Daniel García Jones
                </Navbar.Brand>
              </Navbar.Header>
              <Nav activeKey={this.props.section}>
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
          </Navbar>          
      </header>
    );
  }
}


export default Header;

