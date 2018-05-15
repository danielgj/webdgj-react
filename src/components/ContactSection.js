import React from 'react';

import i18n from './i18n';

import contactIcon from '../img/contact.png';

class ContactSection extends React.Component {  
    
  render() {
      
    const lang = this.props.language;

    const t = i18n.getKey;
        
        return(

                <div className="container mainContent">
            
                  <div className="separator"/>

                  <section>
                        <div className="row">
                                <div className="col">
                                      <div className="input-group">
                                        <div className="input-group-addon">                              
                                          <span className="input-group-text input-label" id="inputGroupPrepend">Email</span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="danielgj@gmail.com" aria-describedby="inputGroupPrepend" disabled/>
                                      </div>
                                      <div className="input-group">
                                        <div className="input-group-addon">
                                          <span className="input-group-text  input-label" id="inputGroupPrepend">{t(lang,"phone")}</span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="+34 625 625 009" aria-describedby="inputGroupPrepend" disabled/>
                                      </div>
                                      <div className="input-group">
                                        <div className="input-group-addon">
                                          <span className="input-group-text  input-label" id="inputGroupPrepend">Twitter</span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="@danielgarjones" aria-describedby="inputGroupPrepend" disabled/>
                                      </div>
                                      <div className="input-group">
                                        <div className="input-group-addon">
                                          <span className="input-group-text  input-label" id="inputGroupPrepend">LinkedIn</span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="https://www.linkedin.com/in/dgarciaj/" aria-describedby="inputGroupPrepend" disabled/>
                                      </div>
                                      <div className="input-group">
                                        <div className="input-group-addon">
                                          <span className="input-group-text  input-label" id="inputGroupPrepend">Github</span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="https://github.com/danielgj" aria-describedby="inputGroupPrepend" disabled/>
                                      </div>
                                </div>

                        </div>
                    </section>

                    <div className="separator"/>
                        
                </div>          
        )
    }
}

export default ContactSection;