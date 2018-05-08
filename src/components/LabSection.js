import React from 'react';

import foodPlannerIcon from '../img/food_planner.png';
import fumequeControlIcon from '../img/fumeque_control.png';
import imtIcon from '../img/stocks.png';
import itgameIcon from '../img/it_game.png';

class LabSection extends React.Component {
    
    
    
    render() {
            
        const lang = this.props.language;
        
        if(lang === 'es') {
            
            return (
            
                <div className="container mainContent">
                    
                      <div className="row">
                          <div className="col">
                             <h1>Proyectos antiguos</h1>
                              <p className="text-justify">Esta sección pretende cubrir un poco algunos de los experimentos que vaya realizando para aprender nuevas técnicas y lenguajes. Para hacerla más viva, probablemente tenga que recurrir al blog, pero listaré aquí aquellos proyectos terminados o descontinuados.</p>  
                              <p className="text-justify">Algunos de estos proyectos ya tienen un tiempo y básicamente me permitieron explorar algunos conceptos. Echando la vista atrás son proyectos a los que tengo cariño pero que a día de hoy desarrollaría de otra manera muy diferente.</p>
                              <p>Algunos de estos proyectos están colgados en mi cuenta de Github por si alguien se anima a continuarlos.</p>                
                          </div>
                      </div>
                
                      <div className="separator"/>

                       <div className="row">
                          <div className="col col-12 col-sm-6 col-lg-3">
                               <div className="card">
                                  <img className="card-img-top" src={foodPlannerIcon} alt="Foodplanner App" title="FoodPlanner App"/>
                                  <div className="card-body lab-card">
                                    <h5 className="card-title">Foodplanner</h5>
                                    <p className="card-text text-justify">App Android para configuración de planes de comida y listas de la compra compartidas. Utiliza Firebase (Login, Database y Storage).</p>
                                    <a href="https://play.google.com/store/apps/details?id=com.lulidan.foodplanner" target="_blank" className="btn btn-primary btn-lab" rel="noopener noreferrer">Más información</a>
                                  </div>
                                </div>
                           </div>
                           <div className="col col-12 col-sm-6 col-lg-3">
                               <div className="card">
                                  <img className="card-img-top" src={fumequeControlIcon} alt="Fumequecontrol App" title="Fumequecontrol App"/>
                                  <div className="card-body lab-card">
                                    <h5 className="card-title">FumequeControl</h5>
                                    <p className="card-text text-justify">App Android para ayudar a dejar de fumar contabilizando los cigarros fumados y el gasto en tabaco. ALta de cigarros fumados con Wear.</p>
                                    <a href="https://play.google.com/store/apps/details?id=com.lulidan.fumequecontrol" target="_blank" className="btn btn-primary btn-lab" rel="noopener noreferrer">Más información</a>
                                  </div>
                                </div>
                           </div>
                           <div className="col col-12 col-sm-6 col-lg-3">
                               <div className="card">
                                  <img className="card-img-top" src={imtIcon} alt="Control de Inventario" title="Control de Inventario"/>
                                  <div className="card-body lab-card">
                                    <h5 className="card-title">Control de Inventario</h5>
                                    <p className="card-text text-justify">Solución Full Stack web y móvil. Permite el alta de un inventario categorizado y la gestión de préstamos y devoluciones de los elementos.</p>
                                    <a href="https://github.com/danielgj/imt-ionic-app" rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-lab">Más información</a>
                                  </div>
                                </div>
                           </div>           
                           <div className="col col-12 col-sm-6 col-lg-3">
                               <div className="card">
                                  <img className="card-img-top" src={itgameIcon} alt="My IT Game" title="My IT Game"/>
                                  <div className="card-body lab-card">
                                    <h5 className="card-title">My IT Game</h5>
                                    <p className="card-text text-justify">Aplicación web gamificada para ayudar a equipos de desarrollo software a implementar prácticas de integración continua.</p>
                                    <a href="https://github.com/danielgj/itgame-web/" rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-lab">Más información</a>
                                  </div>
                                </div>
                           </div>    
                        </div>       

                        

                        <div className="row">
                          <div className="col">
                              <h1>Sobre esta web</h1>
                              <p className="text-justify">Mi actual proyecto consiste en aprender React.</p>
                              <p className="text-justify">En ese afan, he decido crear esta versión de mi página personal usando esta tecnología.</p>
                              <p>Como resumen listo aquí algunas de las cosas que estoy haciendo (de momento) en esta web:</p>
                              <ul>
                                  <li><b>Github:</b> He subido el código a un <a href="https://github.com/danielgj/webdgj-react" target="_blank" rel="noopener noreferrer">repositorio público</a> y lo licenciaré con alguna licencia Open Source para quue quien quiera pueda coger el código y usarlo, extenderlo, etc.</li>
                                  <li><b>Uso de React-Boostrap:</b> Lo que explica porque es tan fea y en algunos puntos diferente a la web original que toma como modelo ya que React-bootsrap usa Bootsrap 3. La idea es adaptar el template original de Boostrap 4 y que siga siendo 100% responsive y se comporte adecuadamente en cualquier tipo de pantalla.</li>
                                  <li><b>Uso de React-Router:</b> Aunque de momento el enrutado es bastante sencillo, si estoy pasando alguna propiedad y modificándola desde el componente Header para soportar el multidioma.</li>
                              </ul>
                              <p>Los siguientes pasos serán:</p>
                              <ul>
                                  <li><b>Babel</b> para poder probar y aprender ECMA6</li>
                                  <li><b>Testing</b></li>
                                  <li><b>Uso de Gulp para automatización de tareas del desarrollo:</b> Crear un fichero gulp (o similar) para poder automatizar el desarrollo con React.</li>
                              </ul>

                          </div>
                        </div>

                    <div className="separator"/>
                
                </div>
       
            
            )
            
        } else {
        return (
            <div className="container mainContent">
                <div className="separator"/>
                <h1>Page under translation. So sorry!</h1>
            </div>
        )
    }
                    
    }

}

export default LabSection;