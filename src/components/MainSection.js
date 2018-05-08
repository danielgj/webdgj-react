import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from "react-router-dom";


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
    
        
  constructor(props) {
     super(props);
  }
    
  render() {
      
    const lang = this.props.language;
    const changeLang = this.props.changeLangFunc;
      
    if(lang==="es") {
        return (
    

      <div className="container">
              <Jumbotron>
                  <h1 className="display-4">¡Hola, mundo!</h1>
                  <p className="lead text-justify">Bienvenido a la página personal escrita con React de <span className="font-italic font-bold">Daniel García Jones</span>, Arquitecto de Movilidad y Sr. Business Analyst en Unisys.</p>
                  <p  className="lead text-justify">Esta web cumple una doble función: exponer al mundo mis datos de contacto y servirme de campo de pruebas para desarrollo web con tecnologías modernas. Además sirve de acceso a mi Blog personal.</p>
              </Jumbotron>
            
              <section id="about_me">
            <div className="row">
               <div className="col col-12  col-sm-6">
                   <img src={dgjLogronyo} alt="Daniel García en Logroño" title="Daniel García en Logroño" className="img-responsive img-rounded float-left"/>
               </div>
               <div className="col col-12 col-sm-6">
                   <h1>Bio</h1>
                    <p className="text-justify"> 
                    Soy Arquitecto de Movilidad en <a href="http://www.unisys.es">Unisys</a>, básicamente dedicado a tareas de <i>Tech Lead</i> que compagino con labores de preventa de soluciones y proyectos de movilidad al tiempo que participo en la transformación Ágil de la Empresa.
                   </p>

                    <p  className="text-justify">
                    En el terreno de lo personal, me encanta la música, casi todos los estilos pero sobre todo lo que se conoce como música negra (soul, funk, jazz en sus múltiples vertientes), aunque también el rock, el flamenco, el pop bien hecho... He tocado el bajo durante un tiempo y siempre me estoy prometiendo a mi mismo volver a dar clases y buscar algún grupo con quien tocar. 
                   </p>
                   
                   <p className="text-justify">
                    También me encantan tanto como comer como viajar. Y si es viajar a sitios donde se coma genial, pues mejor que mejor. Últimamente he empezado a hacer mi propia cerveza. En cuánto de con LA RECETA la publicaré en el blog.
                   </p>
                   
               </div>
            </div>
        </section>
        
        <div className="separator"></div>
        
        <section id="about_thispage">
            <div className="row">
               <div className="col col-12  col-sm-6">
                    <h1>Sobre tecnología</h1>                   
                    <p className="text-justify">
                    Esta página pretende ser un escaparate de mi trabajo y mis intereses en torno a la tecnología: desarrollo <i>web</i> y de <i>movilidad</i> fundamentalmente pero sin dejar de lado el tema de Agile en general y <i>Scrum</i> en particular.
                    </p>
                    <p className="text-justify">Apasionado de la web en general desde hace muchos años, cada vez más, me doy cuenta de que cada día salen frameworks y <i>silver-bullets</i> nuevos y que tengo que hacer un esfuerzo constante día a día para no quedarme desfasado. Ya no vale con escribir HTML/CSS/Javascript en un editor de texto para sentir que eres "experto" en desarrollo web.</p>
                    <p className="text-justify">Tengo amplios conocimientos de Node.js, Express y Angular.js pero estoy empezando ahora a conocer frameworks más modernos como React, Vue,... <b>¿En qué me recomendáis profundizar?</b></p>
                    <p className="text-justify">Esta página espero que me sirva como experimento para poder probar estas nuevas tecnologías. De momento está montada de manera muy sencilla con React, React-Boostrap y React-Router pero queda mucho trabajo por delante.</p>
                    <p className="text-justify">Tambien me gusta el desarrollo Android y tengo un par de aplicaciones publicadas en <i>Google Play</i>.</p> 
                   <p className="text-justify">Échale un ojo al apartado de <Link to="/lab">Laboratorio</Link> para más información acerca de mis últimos proyectos software.</p>
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
        
    } else {
        
        return (
        <div className="container">
              <Jumbotron>
                  <h1 className="display-4">¡Hello, world!</h1>
                  <p className="lead text-justify">Bienvenido a la página personal escrita con React de <span className="font-italic font-bold">Daniel García Jones</span>, Arquitecto de Movilidad y Sr. Business Analyst en Unisys.</p>
                  <p  className="lead text-justify">Esta web cumple una doble función: exponer al mundo mis datos de contacto y servirme de campo de pruebas para desarrollo web con tecnologías modernas. Además sirve de acceso a mi Blog personal.</p>
              </Jumbotron>
          </div> 
        )
    }


  }

}

export default MainSection;
