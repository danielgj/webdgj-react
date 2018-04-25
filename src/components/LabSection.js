import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

///////CSS
import '../css/App.css';

class LabSection extends React.Component {
  render() {
      
    if(this.props.language === 'es') {
      return (
         <p>Laboratorio</p>          
        );
    } else {
        return (
          <p>Lab</p>
        );
    }
    
  }
}

export default LabSection;