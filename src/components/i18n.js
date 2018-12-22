// we init with resources

class I18n {
    
    static getKey(lang, key) {
        
        const tags = {
            es: {          
                "home": "Inicio",
                "lab": "Laboratorio",
                "cv": "Curriculum",
                "blog": "Blog",
                "contact": "Contacto",
                "es": "Español",
                "en": "Inglés",
                "github_profile": "Perfil Github",
                "linkedin_profile": "Perfil LinkedIn",
                "twitter_profile": "Perfil Twitter",
                
                
                
                "hello_world": "¡Hola, mundo!",
                "wellcome_to": "Bienvenido a la página personal escrita con React de ",
                "mobillity_architect": ", Jefe de Proyecto en Bdeo.",
                "this_Web_function": "Esta web cumple una doble función: exponer al mundo mis datos de contacto y servirme de campo de pruebas para desarrollo web con tecnologías modernas. Además sirve de acceso a mi Blog personal.",
                "bio": "Sobre mí",
                "mobility_arquitect_at": "Soy Jefe de Proyecto en ",
                "i_do": ", básicamente dedicado a tareas de Team Lead y supervisión del equipo de desarrollo. Al mismo tiempo estoy participando en la definición e implantación de la metodología de trabajo para el equipo, haciendo foco en la gestión de entregas para los distintos clientes y en el despliegue de sistemas de itegración continua.",
                "bio_2": "En el terreno de lo personal, me encanta la música, casi todos los estilos pero sobre todo lo que se conoce como música negra (soul, funk, jazz en sus múltiples vertientes), aunque también el rock, el flamenco, el pop bien hecho... He tocado el bajo durante un tiempo y siempre me estoy prometiendo a mi mismo volver a dar clases y buscar algún grupo con quien tocar. ",
                "bio_3": "También me encantan tanto comer como viajar. Y si es viajar a sitios donde se coma genial, pues mejor que mejor. Últimamente he empezado a hacer mi propia cerveza. En cuánto de con LA RECETA la publicaré en el blog.",
                "about_tech": "Sobre tecnología",
                "about_tech_1": "Esta página pretende ser un escaparate de mi trabajo y mis intereses en torno a la tecnología: desarrollo ",
                "about_tech_2": " y de ",
                "movilidad": "movilidad",
                "about_tech_3": " fundamentalmente pero sin dejar de lado el tema de Agile en general y ",
                "about_tech_4": " en particular.",
                "about_tech_5": "Apasionado de la web en general desde hace muchos años. Tengo amplios conocimientos de Node.js, Express y Angular.js. Actualmente trabajo también con Angular 6 y estoy empezando a conocer otros frameworks modernos como React.",
                "about_tech_7": "Esta página espero que me sirva como experimento para poder probar estas nuevas tecnologías. De momento está montada de manera muy sencilla con React y React-Router pero queda mucho trabajo por delante.",
                "about_tech_8": "Tambien me gusta el desarrollo Android y tengo un par de aplicaciones publicadas en ",
                "about_tech_9": " Échale un ojo al apartado de ",
                "about_tech_9_1": "Desde 2018 colaboro también con ",
                "about_tech_9_2": "específicamente en el proyecto de EventPoints.",
                "about_tech_10": " para más información acerca de mis últimos proyectos software.",
                
            
                "old_projects": "Proyectos antiguos",
                "lab_1": "Esta sección pretende cubrir un poco algunos de los experimentos que vaya realizando para aprender nuevas técnicas y lenguajes. Para hacerla más viva, probablemente tenga que recurrir al blog, pero listaré aquí aquellos proyectos terminados o descontinuados.",
                "lab_2": "Algunos de estos proyectos ya tienen un tiempo y básicamente me permitieron explorar algunos conceptos. Echando la vista atrás son proyectos a los que tengo cariño pero que a día de hoy desarrollaría de otra manera muy diferente.",
                "lab_3": "Algunos de estos proyectos están colgados en mi cuenta de Github por si alguien se anima a continuarlos.",
                "food_planner_descr": "App Android para configuración de planes de comida y listas de la compra compartidas. Utiliza Firebase (Login, Database y Storage).",
                "more_info": "Más información",
                "fumeque_control_descr": "App Android para ayudar a dejar de fumar contabilizando los cigarros fumados y el gasto en tabaco. Alta de cigarros fumados con Wear.",
                "imt_title": "Control de Inventario",
                "imt_descr": "Solución Full Stack web y móvil. Permite el alta de un inventario categorizado y la gestión de préstamos y devoluciones de los elementos.",
                "it_game_descr": "Aplicación web gamificada para ayudar a equipos de desarrollo software a implementar prácticas de integración continua.",
                "about_the_web": "Sobre esta web",
                "about_the_web_1": "Mi actual proyecto consiste en aprender React. En ese afan, he decido crear esta versión de mi página personal usando esta tecnología.",
                "about_the_web_2": "Como resumen listo aquí algunas de las cosas que estoy haciendo (de momento) en esta web:",
                "about_the_web_3": " He subido el código a un ",
                "about_the_web_4": " y lo licenciaré con alguna licencia Open Source para quue quien quiera pueda coger el código y usarlo, extenderlo, etc.",
                "public_repo": "repositorio público",
                "about_the_web_5": " Aunque de momento el enrutado es bastante sencillo, si estoy pasando alguna propiedad y modificándola desde el componente Header para soportar el multidioma.",
                "about_the_web_6": "Los siguientes pasos serán:",
                "gulp_usage": "Uso de Gulp para automatización de tareas del desarrollo:",
                "gulp_descr": " Crear un fichero gulp (o similar) para poder automatizar el desarrollo con React.",
                "babel_usage": " para poder probar y aprender ECMA6",
                
                "phone": "Teléfono",
                
                "cv_1": "Inicio mi carrera profesional en el año 2004 en el desarrollo de aplicaciones Java/J2EE. En el año 2005 cofundo ByG Soluciones y comienzo a trabajar en desarrollo J2EE en tecnologías SAP Netweaver (con los siguientes productos: SAP ICSS, SAP J2EEngine, WebDynpro Java, JCo, Visual Composer, SAP EP).",
                "cv_2": "En el año 2010, comienzo a trabajar en el área de desarrollo de aplicaciones móviles en múltiples plataformas (iOS, Android, Windows Mobile y Windows Phone) y en el manejo de la Plataforma de Movilidad de SAP (Sybase Unwired Platform y SAP Gateway).",
                "cv_3": "En 2011 dejo ByG Soluciones y me incorporo a Unisys. Durante esta etapa, realizo tareas de preventa, i+d y jefatura de proyecto en proyectos de movilidad en EMEA y LATAM.",
                "cv_4": "Adicionalmente, me encargo del diseño e implementación de la metodología de gestión y desarrollo de proyectos de movilidad y de la adopción de metodologías ágiles en el Grupo de Movilidad de Unisys España (contando para ello con las certificaciones PSMI y PSPOI de Scrum.org).",
                "cv_5": "Desde Diciembre de 2018 trabajo como Jefe de Proyecto en Bdeo, una startup Española con varios premios internacionales que se dedica a la Inteligencia Visual aplicada al mundo de los seguros.",
                
                "cv_6": " Puedes descargar mi CV resumido en español en el siguiente enlace ",
                "cv_7": "Curriculum Daniel García Diciembre 2018",
                "empleos": "Empleos",
                "educacion": "Educación",
                "certificaciones": "Certificaciones"
                
                
            },
            en: {          
                "home": "Home",
                "lab": "Portfolio",
                "cv": "Curriculum",
                "blog": "Blog",
                "contact": "Contact",
                "es": "Spanish",
                "en": "English",
                "github_profile": "Github Profile",
                "linkedin_profile": "LinkedIn Profile",
                "twitter_profile": "Twitter Profile",
                
                
                "hello_world": "Hello, world!",
                "wellcome_to": "Welcome to React's homepage of ",
                "mobillity_architect": ", Project Manager at Bdeo.",
                "this_Web_function": "This site has two main functions: It displays my contact information and access to my blog while offers me a test lab for modern web technollogies.",
                "bio": "About me",
                "mobility_arquitect_at": "I'm Project Manager at ",
                "i_do": ", basically acting as Team Lead. I'm also working in coordination with our CTO in defining and testing the development methodollogies and continous integration practice.",
                "bio_2": "I love music, every style but mostly black music (blues, soul, jazz, funk). I've played bass for some time and I'm always promising me to take lessons again and search for some band to play with. ",
                "bio_3": "I also love to travel and eat. And travel to eat is my most dreamed work. Lately I'm home brewing different kinds of beer. If I found a killer recipe I will post it in the blog.",
                "about_tech": "About technology",
                "about_tech_1": "This page is intended to be a showrom of my work and interests around technology: basically ",
                "about_tech_2": " and ",
                "movilidad": "mobillity",
                "about_tech_3": " but also Agile and specially ",
                "about_tech_4": ".",
                "about_tech_5": "Web passionate since many years. I have solid knowledge in Node.js, Express and Angular.js. I'm working now with Angular 6 and learning other modern frameworks like React.",
                "about_tech_7": "I'm using this page as a playground to test new web technologies. Right now is build with React and react-router but I intend to test other libraries to complete it.",
                "about_tech_8": "I also love Android development and I have published a couple of apps in ",
                "about_tech_9": " Take a look to ",
                "about_tech_9_1": "Since 2018 I collaborate with ",
                "about_tech_9_2": "being a team member in EventPoints project.",                
                "about_tech_10": " for more information about my latest development projects.",
                
                "old_projects": "Old projects",
                "lab_1": "This section will include several experiments I'm making to learn different techniques. To have this updated, I will also use the blog and list here many old projects.",
                "lab_2": "Many of them are quite old but all of them allow me to explore different concepts. Probably I would develop them today in a different way.",
                "lab_3": "Most of them are available in my Github account just in case anyone wants to extend them.",
                "food_planner_descr": "Android App to configure meal plans and create shared shopping lists. Uses Firebase (Login, Database and Storage).",
                "more_info": "More info",
                "fumeque_control_descr": "Android App to help people quit smoking by counting expenses and cigar units. It also has wear companion app.",
                "imt_title": "Inventary Management",
                "imt_descr": "Full Stack Solution (web/mobile) to manage inventory and loans of material.",
                "it_game_descr": "Gamified web solution to help development teams to adopt Continous Integration practices.",
                "about_the_web": "About this web",
                "about_the_web_1": "I'm currently learning React.js. This web page is my playground to learn it.",
                "about_the_web_2": "Actually, this are the tools I'm using:",
                "about_the_web_3": " I've uploaded the code to my ",
                "about_the_web_4": " and I will license it with some sort of Open Source license just in case anyone wants to reuse this.",
                "public_repo": "public repository",
                "about_the_web_5": " Even when the routing is quite simple and state props are only language, active menu item and CV sections displayed.",
                "about_the_web_6": "Next steps:",
                "gulp_usage": "Gulp usage.",
                "gulp_descr": "",
                "babel_usage": " to learn and try ECMA6.",
                
                "phone": "Phone",
                
                "cv_1": "I started my professional career at year 2004 in Java/J2EE development. In year 2005 I cofounded ByG Soluciones and started to work in J2EE development with SAP Netweaver Technologies, using following products: SAP ICSS, J2EEngine, WebDynpro Java, JCo, Visual Composer and SAP EP.",
                "cv_2": "In 2010 I started to work on Mobile Applications development for several platforms (iOS, Android, Windows Mobile and Windows Phone) and SAP MEAP (Sybase Unwired Platform and Gateway).",
                "cv_3": "In 2011 I left ByG Soluciones to join Unisys. There I was in charge of design and deployment of Unisys ESCoE Project Management and Development Methodology and Agile transfornmation (with Scrum.org PSMI and PSPOI certifications).",
                "cv_4": "",
                "cv_5": "Since December 2018 I work as Project Manager at Bdeo, an spanish insurtech with many international awards.",
                
                "cv_6": " You can download my resume in the following link ",
                "cv_7": "Daniel García December 2018 CV",
                "empleos": "Employment",
                "educacion": "Education",
                "certificaciones": "Certs"
            }
        }
        
        return tags[lang][key];
    }

}


export default I18n;
