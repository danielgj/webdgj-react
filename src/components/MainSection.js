import React from 'react';
import { Link } from "react-router-dom";

import i18n from './i18n';

import dgjLogronyo from '../img/dgj.jpg';
import htmlIcon from '../img/html.jpg';
import bootsrapIcon from '../img/bootstrap-stack.png';
import saasIcon from '../img/saas.svg';
import gulpIcon from '../img/gulpjs-retina-preview.png';
import jasmineIcon from '../img/jasmine.svg';
import babelIcon from '../img/babel.png';
import nodeIcon from '../img/nodejs.png';
import expressIcon from '../img/Expressjs.png';
import mongoIcon from '../img/mongodb.svg';
import androidIcon from  '../img/android.jpg';
import githubIcon from '../img/github.png'


class MainSection extends React.Component {
    
        
  render() {
      
    const lang = this.props.language;
    
    const t = i18n.getKey;
      
    return (
    
      <div className="container mainContent">
            <div className="separator"/>
              <div className="jumbotron">
                  <h1 className="display-4">{t(lang,"hello_world")}</h1>
                  <p className="lead text-justify">{t(lang,"wellcome_to")} <span className="font-italic font-bold">Daniel García Jones</span>{t(lang,"mobillity_architect")}</p>
                  <p  className="lead text-justify">{t(lang,"this_Web_function")}</p>
              </div>
            
              <section id="about_me">
                    <div className="row">
                       <div className="col col-12  col-sm-6">
                           <img src={dgjLogronyo} alt="Daniel García en Logroño" title="Daniel García en Logroño" className="rounded float-left img-fluid"/>
                       </div>
                       <div className="col col-12 col-sm-6">
                           <h1>{t(lang,"bio")}</h1>
                            <p className="text-justify"> 
                                {t(lang,"mobility_arquitect_at")}<a href="http://www.unisys.es">Unisys</a>{t(lang,"i_do")}
                            </p>

                            <p  className="text-justify">
                                {t(lang,"bio_2")}
                            </p>

                            <p className="text-justify">
                                 {t(lang,"bio_3")}                            
                            </p>

                       </div>
                    </div>
                </section>

                <div className="separator"></div>

                <section id="about_thispage">
                    <div className="row">
                       <div className="col col-12  col-sm-6">
                            <h1>{t(lang, "about_tech")}</h1>                   
                            <p className="text-justify">
                                 {t(lang,"about_tech_1")}<i>web</i>{t(lang,"about_tech_2")}<i>{t(lang,"movilidad")}</i>{t(lang,"about_tech_3")}<i>Scrum</i> {t(lang,"about_tech_4")}
                            </p>
                            <p className="text-justify">{t(lang,"about_tech_5")}</p>
                            <p className="text-justify">{t(lang,"about_tech_6")}</p>
                            <p className="text-justify">{t(lang,"about_tech_7")}</p>
                            <p className="text-justify">{t(lang,"about_tech_8")}<i>Google Play</i>.</p> 
                           <p className="text-justify">{t(lang,"about_tech_9")}<Link to="/lab">{t(lang,"lab")}</Link>{t(lang,"about_tech_10")}</p>
                       </div>
                       <div className="col col-12 col-sm-6">
                           <div className="row">
                               <div className="col col-md-4 align-middle"><img src={htmlIcon} className="img-fluid" title="HTML+CSS+JS" alt="HTML+CSS+JS"/></div>
                               <div className="col col-md-4 align-middle"><img src={bootsrapIcon} className="img-fluid" title="Bootstrap" alt="Bootstrap"/></div>
                               <div className="col col-md-4 align-middle"><img src={saasIcon} className="img-fluid" title="Saas" alt="Saas"/></div>
                           </div>

                                  <div className="row">
                                      <div className="col col-md-4 align-middle"><img src={gulpIcon} className="img-fluid" title="Gulp" alt="Gulp"/></div>
                                      <div className="col col-md-4 align-middle"><img src={jasmineIcon} className="img-fluid" title="Jasmine" alt="Jasmine"/></div>
                                      <div className="col col-md-4 align-middle"><img src={babelIcon} className="img-fluid" title="Babel" alt="Babel"/></div>
                                  </div>

                                  <div className="row">
                                      <div className="col col-md-4 align-middle"><img src={nodeIcon} className="img-fluid" title="Node" alt="Node"/></div>
                                      <div className="col col-md-4 align-middle"><img src={expressIcon} className="img-fluid" title="Express" alt="Express"/></div>
                                      <div className="col col-md-4 align-middle"><img src={mongoIcon} className="img-fluid" title="MongoDB" alt="MongoDB"/></div>
                                  </div>

                                  <div className="row">
                                      <div className="col col-md-4 align-middle"><img src={androidIcon} className="img-fluid" title="Android" alt="Android"/></div>
                                      <div className="col col-md-4 align-middle"><img src={githubIcon} className="img-fluid" title="Github" alt="Github"/></div>
                                      <div className="col col-md-4 align-middle"></div>
                                  </div>

                       </div>
                    </div>
                </section>

                <div className="separator"></div>
        </div>  
        ) 
        
    

  }

}

export default MainSection;
