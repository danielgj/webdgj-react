import React from 'react';
import { Jumbotron } from 'react-bootstrap';
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
              <Jumbotron>
                  <h1 className="display-4">{t(lang,"hello_world")}</h1>
                  <p className="lead text-justify">{t(lang,"wellcome_to")} <span className="font-italic font-bold">Daniel García Jones</span>{t(lang,"mobillity_architect")}</p>
                  <p  className="lead text-justify">{t(lang,"this_Web_function")}</p>
              </Jumbotron>
            
              <section id="about_me">
                    <div className="row">
                       <div className="col col-12  col-sm-6">
                           <img src={dgjLogronyo} alt="Daniel García en Logroño" title="Daniel García en Logroño" className="img-responsive img-rounded float-left"/>
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
                               <div className="col col-md-4 align-middle"><img src={htmlIcon} className="img-responsive" title="HTML+CSS+JS" alt="HTML+CSS+JS"/></div>
                               <div className="col col-md-4 align-middle"><img src={bootsrapIcon} className="img-responsive" title="Bootstrap" alt="Bootstrap"/></div>
                               <div className="col col-md-4 align-middle"><img src={saasIcon} className="img-responsive" title="Saas" alt="Saas"/></div>
                           </div>

                                  <div className="row">
                                      <div className="col col-md-4 align-middle"><img src={gulpIcon} className="img-responsive" title="Gulp" alt="Gulp"/></div>
                                      <div className="col col-md-4 align-middle"><img src={jasmineIcon} className="img-responsive" title="Jasmine" alt="Jasmine"/></div>
                                      <div className="col col-md-4 align-middle"><img src={babelIcon} className="img-responsive" title="Babel" alt="Babel"/></div>
                                  </div>

                                  <div className="row">
                                      <div className="col col-md-4 align-middle"><img src={nodeIcon} className="img-responsive" title="Node" alt="Node"/></div>
                                      <div className="col col-md-4 align-middle"><img src={expressIcon} className="img-responsive" title="Express" alt="Express"/></div>
                                      <div className="col col-md-4 align-middle"><img src={mongoIcon} className="img-responsive" title="MongoDB" alt="MongoDB"/></div>
                                  </div>

                                  <div className="row">
                                      <div className="col col-md-4 align-middle"><img src={androidIcon} className="img-responsive" title="Android" alt="Android"/></div>
                                      <div className="col col-md-4 align-middle"><img src={githubIcon} className="img-responsive" title="Github" alt="Github"/></div>
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
