import React, { Component} from 'react';

import { Content } from './style';

class ContentButtonStarred extends Component{
    
     render(){
        return(
        
            <Content>
                { 
                    this.props.starreds.map(starred => 
                        <div key={starred.id}>
                            <div className="boxContent">
                                <h2>{starred.name}</h2>
                            </div>

                           <div className="boxContent">
                                <p>{starred.description}</p>
                            </div>

                            <div className="boxContent">
                                <p>{starred.owner.login}</p>
                            </div>

                            <div className="boxContent">
                                <p>{starred.owner.type}</p>
                            </div>
                        </div>
                    )
                }
            </Content>
            
        ); 
    }            
         
}

export default ContentButtonStarred;