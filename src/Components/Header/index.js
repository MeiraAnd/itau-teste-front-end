import React, { Component } from 'react';

import api from '../../Services/api';

import { Form } from './style';

class Header extends Component {

    state = {
        UsersInput: '',
        users: [],
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
                
            </div>
        );
    }
}

export default Header;
