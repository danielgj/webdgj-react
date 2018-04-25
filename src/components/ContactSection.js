import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

///////CSS
import '../css/App.css';


class ContactSection extends React.Component {
  render() {
      
    if(this.props.language === 'es') {
      return (
         <p>Contact es</p>          
        );
    } else {
        return (
          <p>Contact en</p>
        );
    }
    
  }
}

export default ContactSection;