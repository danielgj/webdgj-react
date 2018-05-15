import React from 'react';
import { Link } from "react-router-dom";

import i18n from './i18n';

import esIcon from '../img/es_flag.png';
import enIcon from '../img/uk_flag.png';

class Header extends React.Component {  
    
  constructor(props) {
        super(props);
        this.state = {
            activeHome:  true,
            activeLab: false,
            activeBlog: false,
            activeCV: false,
            activeContact: false
        };
    }
    
    showActiveItem(sectionId) {
        
        this.setState({
            activeHome:  (sectionId==='home'?true:false),
            activeLab: (sectionId==='lab'?true:false),
            activeBlog: (sectionId==='blog'?true:false),
            activeCV: (sectionId==='cv'?true:false),
            activeContact: (sectionId==='contact'?true:false)
        });    
        
    }
    
  render() {
      
    const lang = this.props.language;
    
    const t = i18n.getKey;

    const changeLang = this.props.changeLangFunc;
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                  <a className="navbar-brand" href="#">Daniel García Jones</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className={this.state.activeHome?"nav-item active": "nav-item"}>
                        <Link to="/" className="nav-link" onClick={() => this.showActiveItem('home')}>{t(lang,"home")}<span className="sr-only">(current)</span></Link>
                      </li>
                      <li className={this.state.activeLab?"nav-item active": "nav-item"}>
                        <Link to="/lab" className="nav-link" onClick={() => this.showActiveItem('lab')}>{t(lang,"lab")}</Link>
                      </li>
                      <li className={this.state.activeCV?"nav-item active": "nav-item"}>
                        <Link to="/cv" className="nav-link" onClick={() => this.showActiveItem('cv')}>{t(lang,"cv")}</Link>
                      </li>
                      <li className={this.state.activeBlog?"nav-item active": "nav-item"}>
                        <Link to="/blog" className="nav-link" onClick={() => this.showActiveItem('blog')}>{t(lang,"blog")}</Link>
                      </li>
                      <li className={this.state.activeContact?"nav-item active": "nav-item"}>
                        <Link to="/contact" className="nav-link" onClick={() => this.showActiveItem('contact')}>{t(lang,"contact")}</Link>
                      </li>
                    </ul>
                    <span className="navbar-text">
                      <img src={esIcon} alt={t(lang,"es")} title={t(lang,"es")} className="flag" onClick={() => changeLang('es')}/>
                      <img src={enIcon} alt={t(lang,"en")} title={t(lang,"en")} className="flag" onClick={() => changeLang('en')}/>
                    </span>
                  </div>                          
                </nav>                
            </header>                             
        )
     
    
  }
}


export default Header;

