import React, { Component} from 'react';

import { Content } from './style';

class ContentButtons extends Component{
    
     render(){
        //console.log('teste,' , this.props.repositories);
        return(
        
            <Content>
                { 
                    this.props.repositories.map(repository => 
                        <div key={repository.id}>
                            <div className="boxContent">
                                <h2>{repository.name}</h2>
                            </div>

                           <div className="boxContent">
                                <p>{repository.description}</p>
                            </div>

                            <div className="boxContent">
                                <p>{repository.owner.login}</p>
                            </div>

                            <div className="boxContent">
                                <p>{repository.owner.type}</p>
                            </div>
                        </div>
                    )
                }
                
            
            </Content>
            
        ); 
    }            
         
}

export default ContentButtons;