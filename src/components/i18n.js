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
                "mobillity_architect": ", Arquitecto de Movilidad y Sr. Business Analyst en Unisys.",
                "this_Web_function": "Esta web cumple una doble función: exponer al mundo mis datos de contacto y servirme de campo de pruebas para desarrollo web con tecnologías modernas. Además sirve de acceso a mi Blog personal.",
                "bio": "Sobre mí",
                "mobility_arquitect_at": "Soy Arquitecto de Movilidad en ",
                "i_do": ", básicamente dedicado a tareas de Tech Lead que compagino con labores de preventa de soluciones y proyectos de movilidad al tiempo que participo en la transformación Ágil de la Empresa.",
                "bio_2": "En el terreno de lo personal, me encanta la música, casi todos los estilos pero sobre todo lo que se conoce como música negra (soul, funk, jazz en sus múltiples vertientes), aunque también el rock, el flamenco, el pop bien hecho... He tocado el bajo durante un tiempo y siempre me estoy prometiendo a mi mismo volver a dar clases y buscar algún grupo con quien tocar. ",
                "bio_3": "También me encantan tanto como comer como viajar. Y si es viajar a sitios donde se coma genial, pues mejor que mejor. Últimamente he empezado a hacer mi propia cerveza. En cuánto de con LA RECETA la publicaré en el blog.",
                "about_tech": "Sobre tecnología",
                "about_tech_1": "Esta página pretende ser un escaparate de mi trabajo y mis intereses en torno a la tecnología: desarrollo ",
                "about_tech_2": " y de ",
                "movilidad": "movilidad",
                "about_tech_3": " fundamentalmente pero sin dejar de lado el tema de Agile en general y ",
                "about_tech_4": " en particular.",
                "about_tech_5": "Apasionado de la web en general desde hace muchos años, cada vez más, me doy cuenta de que cada día salen frameworks y silver-bullets nuevos y que tengo que hacer un esfuerzo constante día a día para no quedarme desfasado. Ya no vale con escribir HTML/CSS/Javascript en un editor de texto para sentir que eres \"experto\" en desarrollo web.",
                "about_tech_6": "Tengo amplios conocimientos de Node.js, Express y Angular.js pero estoy empezando ahora a conocer frameworks más modernos como React.",
                "about_tech_7": "Esta página espero que me sirva como experimento para poder probar estas nuevas tecnologías. De momento está montada de manera muy sencilla con React, React-Boostrap y React-Router pero queda mucho trabajo por delante.",
                "about_tech_8": "Tambien me gusta el desarrollo Android y tengo un par de aplicaciones publicadas en ",
                "about_tech_9": "Échale un ojo al apartado de ",
                "about_tech_10": " para más información acerca de mis últimos proyectos software.",
                
                "phone": "Teléfono"
                
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
                "mobillity_architect": ", Mobility Architect and Sr. Business Analyst at Unisys.",
                "this_Web_function": "This site has two main functions: It displays my contact information and access to my blog while offers me a test lab for modern web technollogies.",
                "bio": "About me",
                "mobility_arquitect_at": "I'm Mobility Architect at ",
                "i_do": ", basically acting as Tech Lead and mobility solutions presale. I'm also working in Unisys Agile's transformation.",
                "bio_2": "I love music, every style but mostly black music (blues, soul, jazz, funk). I've played bass for some time and I'm always promising me to take lessons again and search for some band to play with. ",
                "bio_3": "I also love to travel and eat. And travel to eat is my most dreamed work. Lately I'm home brewing different kinds of beer. If I found a killer recipe I will post it in the blog.",
                "about_tech": "About technology",
                "about_tech_1": "This page is intended to be a showrom of my work and interests around technology: basically",
                "about_tech_2": " and ",
                "movilidad": "mobillity",
                "about_tech_3": " but also Agile and specially ",
                "about_tech_4": ".",
                "about_tech_5": "Web passionate since many years, I've started to realize that we get new frameworks and patters each day. We must study and test new things in order to be an \"expert\" web developer.",
                "about_tech_6": "I have solid knowledge in Node.js, Express and Angular.js. I'm starting with modern frameworks like React.",
                "about_tech_7": "Esta página espero que me sirva como experimento para poder probar estas nuevas tecnologías. De momento está montada de manera muy sencilla con React, React-Boostrap y React-Router pero queda mucho trabajo por delante.",
                "about_tech_8": "Tambien me gusta el desarrollo Android y tengo un par de aplicaciones publicadas en ",
                "about_tech_9": "Échale un ojo al apartado de ",
                "about_tech_10": " para más información acerca de mis últimos proyectos software.",
                
                "phone": "Phone"
            }
        }
        
        return tags[lang][key];
    }

}


export default I18n;
