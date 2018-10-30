import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';

const Content = ({ users }) => (
        
    <Fragment> 
        <Container>               
            <section>
                <div className="boxInfos">

                    { 
                        users.map(user => (
                            <Link to={`//github.com/${user.login}`} target="_blank" key={user.id}>
                                <div className="infosUser">
                                    <div className="avatar">
                                        <img src={user.avatar_url} alt={user.name}/>
                                    </div>

                                    <div className="infos">
                                        <h1>{user.name}</h1>
                                        <ul>
                                            <li>"type": "{user.type}"</li>
                                            <li>"company": "{user.type}"</li>
                                            <li>"blog": "{user.blog}"</li>
                                            <li>"location": "{user.location}"</li>
                                            <li>"email": "{user.email}"</li>
                                            <li>"bio": "{user.bio}"</li>
                                            <li>"public_repos": "{user.public_repos}"</li>
                                            <li>"public_gists": "{user.public_gists}"</li>
                                            <li>"followers": "{user.followers}"</li>
                                            <li>"following": "{user.following}"</li>
                                        </ul>                                
                                    </div>
                                </div> 
                            </Link>                        
                        )) 
                    }

                    
                </div>
         
            </section> 
        </Container>             
    </Fragment>
)

export default Content;