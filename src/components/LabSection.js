import React from 'react';


class LabSection extends React.Component {
    
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