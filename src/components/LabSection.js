import React from 'react';

import i18n from './i18n';

import foodPlannerIcon from '../img/food_planner.png';
import fumequeControlIcon from '../img/fumeque_control.png';
import imtIcon from '../img/stocks.png';
import itgameIcon from '../img/it_game.png';

class LabSection extends React.Component {
    
    
    
    render() {
            
        const lang = this.props.language;
    
        const t = i18n.getKey;
    
           
            return (
                    
                
                <div className="container mainContent">
                    
                      <div className="separator"/>
                
                      <div className="row">
                          <div className="col">
                             <h1>{t(lang,'old_projects')}</h1>
                              <p className="text-justify">{t(lang,'lab_1')}</p>  
                              <p className="text-justify">{t(lang,'lab_2')}</p>
                              <p className="text-justify">{t(lang,'lab_3')}</p>                
                          </div>
                      </div>

                       <div className="row">
                          <div className="col col-12 col-sm-6 col-lg-3">
                               <div className="card">
                                  <img className="card-img-top" src={foodPlannerIcon} alt="Foodplanner App" title="FoodPlanner App"/>
                                  <div className="card-body lab-card">
                                    <h5 className="card-title">Foodplanner</h5>
                                    <p className="card-text text-justify">{t(lang,"food_planner_descr")}</p>
                                    <a href="https://play.google.com/store/apps/details?id=com.lulidan.foodplanner" target="_blank" className="btn btn-primary btn-lab" rel="noopener noreferrer">{t(lang,"more_info")}</a>
                                  </div>
                                </div>
                           </div>
                           <div className="col col-12 col-sm-6 col-lg-3">
                               <div className="card">
                                  <img className="card-img-top" src={fumequeControlIcon} alt="Fumequecontrol App" title="Fumequecontrol App"/>
                                  <div className="card-body lab-card">
                                    <h5 className="card-title">FumequeControl</h5>
                                    <p className="card-text text-justify">{t(lang,"fumeque_control_descr")}</p>
                                    <a href="https://play.google.com/store/apps/details?id=com.lulidan.fumequecontrol" target="_blank" className="btn btn-primary btn-lab" rel="noopener noreferrer">{t(lang,"more_info")}</a>
                                  </div>
                                </div>
                           </div>
                           <div className="col col-12 col-sm-6 col-lg-3">
                               <div className="card">
                                  <img className="card-img-top" src={imtIcon} alt="Control de Inventario" title="Control de Inventario"/>
                                  <div className="card-body lab-card">
                                    <h5 className="card-title">{t(lang,"imt_title")}</h5>
                                    <p className="card-text text-justify">{t(lang,"imt_descr")}</p>
                                    <a href="https://github.com/danielgj/imt-ionic-app" rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-lab">{t(lang,"more_info")}</a>
                                  </div>
                                </div>
                           </div>           
                           <div className="col col-12 col-sm-6 col-lg-3">
                               <div className="card">
                                  <img className="card-img-top" src={itgameIcon} alt="My IT Game" title="My IT Game"/>
                                  <div className="card-body lab-card">
                                    <h5 className="card-title">My IT Game</h5>
                                    <p className="card-text text-justify">{t(lang,'it_game_descr')}</p>
                                    <a href="https://github.com/danielgj/itgame-web/" rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-lab">{t(lang,"more_info")}</a>
                                  </div>
                                </div>
                           </div>    
                        </div>       

                        <div className="separator"/>

                        <div className="row">
                          <div className="col">
                              <h1>{t(lang,"about_the_web")}</h1>
                              <p className="text-justify">{t(lang,"about_the_web_1")}</p>
                              <p>{t(lang,"about_the_web_2")}</p>
                              <ul>
                                  <li><b>Github:</b>{t(lang,"about_the_web_3")}<a href="https://github.com/danielgj/webdgj-react" target="_blank" rel="noopener noreferrer">{t(lang,"public_repo")}</a>{t(lang,"about_the_web_4")}</li>
                                  <li><b>React-Router:</b>{t(lang,"about_the_web_5")}</li>
                              </ul>
                              <p>{t(lang,"about_the_web_6")}</p>
                              <ul>
                                  <li><b>Babel</b>{t(lang,"babel_usage")}</li>
                                  <li><b>Testing</b></li>
                                  <li><b>{t(lang,"gulp_usage")}</b>{t(lang, "gulp_descr")}</li>
                              </ul>

                          </div>
                        </div>

                    <div className="separator"/>
                
                </div>
       
            
            )
            
        
                    
    }

}

export default LabSection;