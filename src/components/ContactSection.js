import React from 'react';

import contactIcon from '../img/contact.png';

class ContactSection  extends React.Component {  
    
  render() {
      
    const lang = this.props.language;
      
    if(lang==="es") {
        
        return(

    <div className="container mainContent">
      <div className="separator"/>
    
      <section>
            <div class="row">
                    <div className="col col-md-4">
                        <img src={contactIcon} alt="Contacto" className="imgContact"/>
                    </div>
                    <div className="col col-md-8">
                          <div class="input-group">
                            <div class="input-group-addon">                              
                              <span class="input-group-text input-label" id="inputGroupPrepend">Email</span>
                            </div>
                            <input type="text" class="form-control" placeholder="danielgj@gmail.com" aria-describedby="inputGroupPrepend" disabled/>
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <span class="input-group-text  input-label" id="inputGroupPrepend">Teléfono</span>
                            </div>
                            <input type="text" class="form-control" placeholder="+34 625 625 009" aria-describedby="inputGroupPrepend" disabled/>
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <span class="input-group-text  input-label" id="inputGroupPrepend">Twitter</span>
                            </div>
                            <input type="text" class="form-control" placeholder="@danielgarjones" aria-describedby="inputGroupPrepend" disabled/>
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <span class="input-group-text  input-label" id="inputGroupPrepend">LinkedIn</span>
                            </div>
                            <input type="text" class="form-control" placeholder="https://www.linkedin.com/in/dgarciaj/" aria-describedby="inputGroupPrepend" disabled/>
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <span class="input-group-text  input-label" id="inputGroupPrepend">Github</span>
                            </div>
                            <input type="text" class="form-control" placeholder="https://github.com/danielgj" aria-describedby="inputGroupPrepend" disabled/>
                          </div>
                    </div>
                
            </div>
        </section>
    </div>          
);
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

export default ContactSection;