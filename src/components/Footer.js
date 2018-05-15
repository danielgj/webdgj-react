import React from 'react';

import i18n from './i18n';

import dgjIcon from '../img/dgj.png';
import twitterIcon from '../img/twitter.png';
import linkedinIcon from '../img/linkedin.png';
import githubIcon from '../img/github.png';



class Footer extends React.Component {  
    
  render() {
      
    const lang = this.props.language;
      
    const t = i18n.getKey;

      return (
          
          <footer className="fixed-bottom navbar bg-dark">
               <img src={dgjIcon} alt="Daniel Garcia Jones" title="Daniel Garcia Jones" className="rounded-circle footerImg"/>
                <div className="row">
                        <div className="col"></div>
                </div>        
                <div className="row">
                    <div className="col">
                        <p className="footerCopy text-center">&copy; 2018 Daniel García Jones</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="text-right footerContact">
                            <a href="https://github.com/danielgj" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt={t(lang,"github_profile")} title={t(lang,"github_profile")} className="socialIcon"/></a>
                            <a href="https://www.linkedin.com/in/dgarciaj/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt={t(lang,"linkedin_profile")} title={t(lang,"linkedin_profile")} className="socialIcon"/></a>
                            <a href="https://twitter.com/danielgarjones/" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt={t(lang,"twitter_profile")} title={t(lang,"twitter_profile")} className="socialIcon"/></a>
                        </p>
                    </div>
                </div>       
            </footer>
      )        
    
  }
}

export default Footer;