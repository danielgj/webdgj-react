import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
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
          language: "es"  
        };
        
        this.changeLang = this.changeLang.bind(this)
    }
    
    changeLang(lang) {
        this.setState({
          language: lang  
        });
    }
    
    render() {
        
      const lang = this.state.language;
        
      return (

          <Router>
              <div className="App">        
                    <Header language={lang} changeLangFunc={this.changeLang}/>
                    <div className="container mainContent">
                    <Route exact path="/" component={() => <MainSection language={lang}/>} />
                    <Route path="/lab" component={() => <LabSection language={lang}/>} />
                    <Route path="/cv" component={() => <CVSection language={lang}/>} />
                    <Route path="/blog" component={() => <BlogSection language={lang}/>} />
                    <Route path="/contact" component={() => <ContactSection language={lang}/>} />
                </div>
                <Footer language={lang} />        
              </div>
            </Router>   
        )
        
    }


}

export default App;
