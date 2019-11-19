import React, {Component} from 'react';

export default class Login extends Component  {
    constructor () {
        super()
        this.state = {
          userName: '',
          password: ''
        }
        this.alert = this.alert.bind(this);
      }
    
      updateUserName (name) {
        this.setState ( { userName: name } );
      }
    
      updatePassword (password) {
        this.setState ( { password: password } )
      }

      alert () {
          alert( `Username: ${this.state.userName} Password: ${this.state.password}` );
      }


    render() {
        return (
            <div>
                <input onChange={ e => this.updateUserName( e.target.value )} type='text'/>
                <input onChange={e => this.updatePassword( e.target.value )} type='text'/>
                <button onClick={this.alert}>Login</button>
            </div>
        );
    }
}