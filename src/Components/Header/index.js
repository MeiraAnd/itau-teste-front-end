import React, { Component } from 'react';

import api from '../../Services/api';
import Content from '../../Components/Content/index';
import Repositories from '../../Components/Repositories/index';
import Starred from '../../Components/Starred/index';

import { Form, Repo, Star } from './style';

class Header extends Component {

    state = {
        UsersInput: '',
        users: [],

        repositoryId: '',
        repositories: [],
        starreds: []
    };

    handleUsers = async (e) =>{
        e.preventDefault();

        const { users } = this.state;
    
        try{
          const response = await api.get(`/users/${this.state.UsersInput}`);

          // Não permite usuários duplicados
            if (users.find(user => user.id === response.data.id)) return false;

    
          this.setState({
            UsersInput: '',
            users: [ ...this.state.users, response.data],
            gitHubId: response.data.login
          });
    
          console.log(response);
        } catch (err){
          console.log(err);
    
        }
    };

    handleRepository = async (e) =>{
        e.preventDefault();
    
        try{
            const response = await api.get(`/users/${this.state.gitHubId}/repos`)

            this.setState({
                UsersInput: '',
                repositories: response.data
                //gitHubOwner: response.data.owner
            });

            console.log(response);
            } catch (err){
            console.log(err);
    
        }
    };

    handleStarred = async (e) =>{
        e.preventDefault();
    
        try{
            const response = await api.get(`/users/${this.state.gitHubId}/starred`)

            this.setState({
                UsersInput: '',
                starreds: response.data
                //gitHubOwner: response.data.owner
            });

            console.log(response);
            } catch (err){
            console.log(err);
    
        }
    };


    render() {
        return (
            <div>

                <Form>
                    <section>                   
                        <form onSubmit={this.handleUsers}>
                            <input type="text" placeholder="Nome do usuário" value={this.state.UsersInput}
                                onChange={e => this.setState({ UsersInput: e.target.value })}
                            />
                            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form> 
                    </section> 
                </Form>

                <Content users={this.state.users} />

                <Repo>  
                    <section>                                              
                        <button onClick={this.handleRepository}>Repos</button>
                        <Repositories repositories={this.state.repositories}  />                         
                    </section>         
                </Repo>

                <Star>  
                    <section>                                              
                        <button onClick={this.handleStarred}>Starred</button>
                        <Starred starreds={this.state.starreds}  />                         
                    </section>         
                </Star>
                
            </div>
        );
    }
}

export default Header;
