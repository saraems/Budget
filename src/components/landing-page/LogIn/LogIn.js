import React, { Component } from 'react';
import './LogIn.scss'

import queryString from 'query-string';

class LogIn extends Component {

    state = {
        logInMali: '',
        logInPassword: '',
        errorMessage: '',
    };

    logInMali = (e) => {
        this.setState({
            logInEmail: e.target.value
        })
    };

    logInPassword = (e) => {
        this.setState({
            logInPassword: e.target.value
        })
    };

    logIn = (e) => {
        e.preventDefault();

        if (this.state.logInEmail && this.state.logInPassword) {

            const logIn = {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                body: queryString.stringify({
                    'username': this.logInEmail,
                    'password': this.state.logInPassword
                })
            };

            fetch(`https://budget-app-back-end.herokuapp.com/login`, logIn)
                .then(res => res.json())
                .catch(err => this.setState({errorMessage: err}));

            console.log('logged!', this.state.logInPassword, this.state.logInEmail);
            this.setState({
                logInEmail: '',
                logInPassword: '',
            });
        } else {
            this.setState({
                errorMessage: '*insert your login and password'
            })
        }
    };

    render() {
        return (
            <section className='login_dialog'>
                <div className='dialog_window'>

                    <p className='dialog_window__header '> Logowanie</p>

                    <span className='close_dialog_window' onClick={ () => this.props.blur('LogInOpen') }> x </span>


                    <form onSubmit={(e) => this.logIn(e)}>

                        <div className="inputs_container">

                            <input
                                onChange={(e) => this.logInMali(e)}
                                type='email'
                                placeholder='e-mail'/><br/>

                            <input
                                onChange={(e) => this.logInPassword(e)}
                                ype='password' placeholder='password'/><br/>

                            <p className='error'> { this.state.errorMessage } </p>

                        </div>

                        <button
                            className='main_btn'
                            onClick={ this.handleClose }
                            type="submit"
                            value="Submit"
                        >
                            Zaloguj sie
                        </button>

                    </form>

                </div>
            </section>
        );
    }
}

export default LogIn