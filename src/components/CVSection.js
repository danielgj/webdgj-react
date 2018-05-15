import React from 'react';

class CVSection extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            openEmpleos:  false,
            openEducacion: false,
            openCerts: false,
            openSkills: false
        };
    }
    
    showCollapsibleByIdAndHideOthers(sectionId) {
        
        this.setState({
            openEmpleos:  (sectionId==='empleos'?true:false),
            openEducacion: (sectionId==='educacion'?true:false),
            openCerts: (sectionId==='certs'?true:false),
            openSkills: (sectionId==='skills'?true:false)
        });    
        
    }
    
    render() {
        
        const lang = this.props.language;
      
        if(lang==="es") {            
        
            return (
            <div className="container mainContent">
                
                <div className="separator"/>

                <section>
                    <p className="text-justify">
                        Inicio mi carrera profesional en el año 2004 en el desarrollo de aplicaciones Java/J2EE. En el año 2005 comienzo a trabajar en desarrollo J2EE en tecnologías SAP Netweaver, conociendo y trabajando con los siguientes productos: SAP ICSS, SAP J2EEngine, WebDynpro Java, JCo, Visual Composer, SAP EP.
                    </p>
                    <p className="text-justify">
                        Adicionalmente, tengo amplios conocimientos de desarrollo Web y Accesibilidad (HTML, CSS, Javascript) y de otros lenguajes y frameworks de desarrollo web.
                    </p>
                    <p className="text-justify">
                        Desde el año 2010, comienzo a trabajar en el área de desarrollo de aplicaciones móviles en múltiples plataformas (iOS, Android, Windows Mobile y Windows Phone) y en el manejo de la Plataforma de Movilidad de SAP (Sybase Unwired Platform y SAP Gateway).
                    </p>
                    <p className="text-justify">
                        Desde octubre de 2012, realizo tareas de preventa en proyectos de movilidad desde el Centro de Excelencia de Movilidad de Unisys en Madrid dando así mismo soporte técnico a Unisys en EMEA y LATAM.
                    </p>
                    <p className="text-justify">
                        Actualmente, me encargo del diseño e implementación de la metodología de gestión y desarrollo de proyectos de movilidad y de la adopción de metodologías ágiles en el Grupo de Movilidad de Unisys España.
                    </p>

                    <p className="text-justify">Puedes descargar mi CV resumido en español en el siguiente enlace <a href="https://webdgj-241b4.firebaseapp.com/files/CV-Daniel.GarciaJones.MARZO2018-ESP.pdf" rel="noopener noreferrer" target="_blank">Curriculum Daniel García Marzo 2018</a></p>

                    <p>

                      <button className="btn btn-primary btn-toggle" type="button" id="btn_empleos" onClick={() => this.showCollapsibleByIdAndHideOthers('empleos')}>
                        Empleos
                      </button>

                     <button className="btn btn-primary btn-toggle" type="button" id="btn_educacion" onClick={() => this.showCollapsibleByIdAndHideOthers('educacion')}>
                        Educación
                      </button>
                      <button className="btn btn-primary btn-toggle" type="button" id="btn_certificaciones" onClick={() => this.showCollapsibleByIdAndHideOthers('certs')}>
                        Certificaciones
                      </button>
                      <button className="btn btn-primary btn-toggle" type="button" id="btn_skills" onClick={() => this.showCollapsibleByIdAndHideOthers('skills')}>
                        Skills
                      </button>
                    </p>


                    <div className="collapse" id="empleos" aria-expanded={this.state.openEmpleos}>
                        <div class="card card-body">
                          <h3><b>Unisys (Madrid)</b> desde Marzo 2011.</h3>
                            <p className="text-justify">Comencé como Consultor SAP, migré hacia el diseño y desarrollo de apps móviles y actualmente estoy dedicado a la Preventa de Soluciones de Movilidad y a tareas de Jefe de Proyecto, Scrum Master y Arquitecto de Soluciones Móviles. Entre los principales clientes para los que he trabajado se encuentran Enaire, Endesa, Repsol, Vodafone, Telefónica, Claro, Ministerio de Empleo y Seguridad Social, Ministerio de Fomento, EUIPO, IFEMA y TMB.</p>

                            <h3><b>ByG Soluciones (Madrid)</b> Junio 2005 – Marzo 2011.</h3>
                            <p className="text-justify">Socio fundador y Director Técnico de ByG Soluciones desde su fundación hasta marzo de 2011. ByG Soluciones es una Consultora Informática especializada en el desarrollo de aplicaciones Web .NET y J2EE con y sin integración con SAP. Entre los principales clientes de la compañía se encuentran Unisys (con una colaboración de más de cinco años), Grupo Fomento, Common MS, Universidad Rey Juan Carlos de Madrid y Grupo Medeland.</p>

                            <h3><b>Grupo Delaware (Madrid)</b> Noviembre 2004- Junio 2005.</h3>
                            <p className="text-justify">Desarrollador de aplicaciones J2EE para Amena y Vodafone.</p>


                            <h3><b>Universidad Carlos III (Madrid)</b> Septiembre 2001- Septiembre 2003.</h3>
                            <p className="text-justify">Becario del Servicio de Informática. Administración y soporte en aulas informáticas Winsdows y Linux.</p>
                        </div>                      
                    </div>

                    <div class="collapse" id="educacion" aria-expanded={this.state.openEducacion}>
                        <div class="card card-body">
                          <h3><b>Ingeniero Técnico en Sistemas de Telecomunicación.</b> Universidad Carlos III Madrid (2004).</h3>
                            <p className="text-justify">Proyecto Fin de Carrera con Matrícula de Honor sobre <a href="https://webdgj-241b4.firebaseapp.com/files/dgjonespfc.pdf" rel="noopener noreferrer" target="_blank">Herramienta CASE de desarrollo de asistentes de navegación Web basada en los diagramas MSC</a></p>
                        </div>                      
                    </div>

                    <div class="collapse" id="certificaciones" aria-expanded={this.state.openCerts}>
                        <div class="card card-body">
                          <ul>
                               <li>SAFe 4.0 Agilist SA (Marzo 2017)</li>
                               <li><a href="https://www.scrum.org/user/200027" target="_blank" rel="noopener noreferrer">Professional Scrum Master I (Octubre 2016)</a></li>
                               <li><a href="https://www.coursera.org/account/accomplishments/specialization/HECEFLSYEGZL" target="_blank" rel="noopener noreferrer">Full Stack Web Development Specialization (Septiembre 2016)</a></li>
                               <li><a href="https://www.coursera.org/account/accomplishments/records/X2VKH8H7583M3eXg" target="_blank" rel="noopener noreferrer">Programming Cloud Services for Android Handheld Systems (Noviembre 2014)</a></li>
                               <li><a href="https://www.coursera.org/account/accomplishments/records/W3UkvFfjsrC3y2VM" target="_blank" rel="noopener noreferrer">Pattern-Oriented Software Architectures: Programming Mobile Services for Android Handheld Systems (Mayo 2014)</a></li>
                               <li><a href="https://www.coursera.org/account/accomplishments/records/v8UZ7KXYnk7bh2gY" target="_blank" rel="noopener noreferrer">Programming Mobile Applications for Android Handheld Systems (Enero 2014)</a></li>                       
                           </ul>
                        </div>                      
                    </div>

                    <div class="collapse" id="skills"  aria-expanded={this.state.openSkills}>
                        <div class="card card-body">
                            <h3><b>Idiomas</b></h3>
                          <ul>
                              <li>Español (nativo)</li>
                              <li>Inglés (nivel medio) </li>
                          </ul>


                          <h3><b>Principales Capacidades y Competencias</b></h3>

                          <h4><b>Consultoría</b></h4>
                         <ul>
                             <li>Frameworks Ágiles (Scrum, SAFe)</li>
                             <li>Diseño de Arquitecturas Software</li>
                             <li>Gestión de Proyectos</li>
                             <li>Dirección de equipos de desarrollo </li>
                             <li>Preventa de Soluciones de Movilidad</li>
                             <li>Desarrollo de Aplicaciones</li>
                             <li>Integración de sistemas</li>
                             <li>Testing</li>                     
                         </ul>

                         <h4><b>Herramientas y Lenguajes de Programación</b></h4>
                         <ul>
                             <li>Desarrollo Android</li>
                             <li>HTML5</li>
                             <li>CSS</li>
                             <li>JavaScript</li>
                             <li>Node.js</li>
                             <li>Express</li>
                             <li>Bootstrap</li>
                             <li>Angular.js</li>
                             <li>Java</li>
                             <li>J2EE</li>
                             <li>PHP</li>
                             <li>JIRA</li>
                             <li>Git</li>
                             <li>SVN</li>
                             <li>Swagger</li>
                         </ul>

                         <h4><b>Sistemas Operativos</b></h4>
                         <ul>
                             <li>Windows</li>
                             <li>Linux</li>
                             <li>MAC OS X</li>
                         </ul>

                         <h4><b>Bases de Datos</b></h4>
                        <ul>
                            <li>MySQL</li>
                            <li>SQL Server</li>
                            <li>MongoDB</li>
                        </ul>

                        </div>                      
                    </div>


                </section>

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

export default CVSection;