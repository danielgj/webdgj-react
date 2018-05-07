import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './Footer';
import MainSection from './MainSection';
import LabSection from './LabSection';
import CVSection from './CVSection';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';

///////CSS
import '../css/App.css';

class App  extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          language: "en"  
        };
    }
    
    render() {
        
      const lang = this.state.language;
        
      return (

          <Router>
              <div className="App">        
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
                      </Navbar>          
                </header>
                <div className="container mainContent">
                    <Route exact path="/" component={() => <MainSection language={lang}/>} />
                    <Route path="/lab" component={() => <LabSection language={lang}/>} />
                    <Route path="/cv" component={() => <CVSection language={lang}/>} />
                    <Route path="/blog" component={() => <BlogSection language={lang}/>} />
                    <Route path="/contact" component={() => <ContactSection language={lang}/>} />
                </div>
                <Footer />        
              </div>
            </Router>   
        )
        
    }


}

export default App;
