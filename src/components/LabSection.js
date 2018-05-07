import React from 'react';


class LabSection extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        
        
        const lang = this.props.language;
    
            return (
                <div>
                  <p>Lab {lang}</p>          
                </div>  
            )
    }

}

export default LabSection;