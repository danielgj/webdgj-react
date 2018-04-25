import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import MainSection from './MainSection';
import LabSection from './LabSection';
import CVSection from './CVSection';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';

///////CSS
import '../css/App.css';


class Container extends React.Component {
  
    render() {
        
      const currentLang = this.props.language;    
      const changeLangFunc  = this.props.changeLang;
        
      return (
        <Router>
            <div className="container">
                <Route exact path="/" component={MainSection} language={currentLang} changeLang = { changeLangFunc }/>
                <Route path="/lab" component={LabSection} language={currentLang} changeLang = { changeLangFunc }/>
                <Route path="/cv" component={CVSection} language={currentLang} changeLang = { changeLangFunc }/>
                <Route path="/blog" component={BlogSection} language={currentLang} changeLang = { changeLangFunc }/>
                <Route path="/contact" component={ContactSection} language={currentLang} changeLang = { changeLangFunc }/>
            </div>
        </Router>
      );
        
    }
}


class App extends Component {
    
  changeLanguage() {
      const currentLang = this.state.lang;
      if(currentLang === "es") {
          this.setState({
            lang: "en"
          });
      } else {
          this.setState({
            lang: "es"
          });
      }
  }
    
  changeSection(id) {
      const currentSection = this.state.section;
      alert("Id: " + id)
      this.setState({
        section: id
      });
  }
  
  constructor(props) {
      super(props);      
      this.state = {
        lang: 'es',
        section: 1
      };
  }
    
  render() {
    
    const currentLang = this.state.lang;    
    const changeLangFunc  = this.changeLanguage.bind(this);
    const changeSectionFunc  = this.changeSection.bind(this);
    const sectionId = this.state.section;

    return (
        <Router>
          <div className="App">
        
            <Header language={currentLang} changeLang = { changeLangFunc } section = { sectionId } changeSelection = {changeSectionFunc}/>

            <Container language={currentLang} changeLang = { changeLangFunc }/>

            <Footer language={currentLang}/>
        
          </div>
        </Router>
    );
  }
}

export default App;
