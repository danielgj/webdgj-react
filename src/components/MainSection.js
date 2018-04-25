import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

///////CSS
import '../css/App.css';


class MainSection extends React.Component {
  render() {
      
    if(this.props.language === 'es') {
      return (
         <div className="container">
              <Jumbotron>
                  <h1 className="display-4">¡Hola, mundo!</h1>
                  <p className="lead text-justify">Bienvenido a la página personal de <span className="font-italic font-bold">Daniel García Jones</span>, Arquitecto de Movilidad y Sr. Business Analyst en Unisys.</p>
                  <p  className="lead text-justify">Esta web cumple una doble función: exponer al mundo mis datos de contacto y servirme de campo de pruebas para desarrollo web con tecnologías modernas. Además sirve de acceso a mi Blog personal.</p>
              </Jumbotron>
              <Button bsStyle="primary" onClick={() => this.props.changeLang()}>Cambiar lenguaje</Button>
          </div>
          
        );
    } else {
        return (
          <div className="container">
              <Jumbotron>
                  <h1>Hello, world!</h1>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                  </p>
                  <p>
                    <Button bsStyle="primary" onClick={() => this.props.changeLang()}>Change lang</Button>
                  </p>
              </Jumbotron>
              
          </div>
        );
    }
    
  }
}

export default MainSection;
