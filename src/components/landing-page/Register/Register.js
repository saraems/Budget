import React, {Component } from 'react';
import './Register.scss'

import queryString from 'query-string';

class Register extends Component {

    state = {
        registerEmail: '',
        registerPassword: '',
        registerPasswordConfirmation: '',
        errorMessage: '',
    };

    registerEmail = (e) => {
        this.setState({
            registerEmail: e.target.value
        })
    };

    registerPassword = (e) => {
        this.setState({
            registerPassword: e.target.value
        })
    };

    registerPasswordConfirmation = (e) => {
        this.setState({
            registerPasswordConfirmation: e.target.value
        })
    };

    register = (e) => {
        e.preventDefault();


        if (this.state.registerEmail.includes('.') && this.state.registerPassword === this.state.registerPasswordConfirmation && this.state.registerEmail.includes('@') && this.state.registerPassword.length > 6) {

            console.log('registered!', this.state.registerEmail, this.state.registerPassword);

            const register = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: queryString.stringify({
                    'password': this.state.registerPassword,
                    'username': this.state.registerEmail,
                })
            };

            fetch(`https://budget-app-back-end.herokuapp.com/register`, register)
                .then(res => res.json())
                .catch(err => console.log(err));

            console.log('registered!', this.state.registerEmail, this.state.registerPassword);
        }

        if (!this.state.registerEmail.includes('.') || !this.state.registerEmail.includes('@')) {
            this.setState({
                errorMessage: '**incorrect e-mail'
            })
        }

        if (this.state.registerPassword.length < 6) {
            this.setState({
                errorMessage: '**password supposed to have at least 6 characters'
            })
        }

        if (this.state.registerPassword !== this.state.registerPasswordConfirmation) {
            this.setState({
                errorMessage: '**passwords are different'
            })
        }
    };


  render() {
    return (
        <section className='register_dialog'>
            <div className='dialog_window'>

                <p className='dialog_window__header'>Rejestracja</p>

                <span className='close_dialog_window' onClick={ () => this.props.blur('RegisterOpen') }> x </span>

                <form onSubmit={(e) => this.register(e)}>

                    <div className="inputs_container">

                        <input onChange={(e) => this.registerEmail(e)} type='email' placeholder='e-mail'/><br/>

                        <input onChange={(e) => this.registerPassword(e)} type='password' placeholder='password'/><br/>

                        <input onChange={(e) => this.registerPasswordConfirmation(e)} type='password' placeholder='confirm password'/>
                        <p className='error'> { this.state.errorMessage } </p>

                    </div>

                    <button className='main_btn' color="secondary" type="submit" value="Submit">
                        Zarerestruj sie
                    </button>

                </form>
            </div>
        </section>
    );
  }
}

export default Register;
