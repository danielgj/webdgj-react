import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

///////CSS
import '../css/App.css';

class CVSection extends React.Component {
  render() {
      
    if(this.props.language === 'es') {
      return (
         <p>CV es</p>          
        );
    } else {
        return (
          <p>CV en</p>
        );
    }
    
  }
}

export default CVSection;