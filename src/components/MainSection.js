import React from 'react';
import { Jumbotron } from 'react-bootstrap';


const MainSection = () => (

      <div className="container">
              <Jumbotron>
                  <h1 className="display-4">¡Hola, mundo!</h1>
                  <p className="lead text-justify">Bienvenido a la página personal de <span className="font-italic font-bold">Daniel García Jones</span>, Arquitecto de Movilidad y Sr. Business Analyst en Unisys.</p>
                  <p  className="lead text-justify">Esta web cumple una doble función: exponer al mundo mis datos de contacto y servirme de campo de pruebas para desarrollo web con tecnologías modernas. Además sirve de acceso a mi Blog personal.</p>
              </Jumbotron>
          </div>     


)

export default MainSection;
