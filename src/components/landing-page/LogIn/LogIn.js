import React, { Component } from 'react';
import './LogIn.scss'

import queryString from 'query-string';

import { DialogTitle, DialogContent, DialogActions } from '../Dialog/Dialog'

import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";


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
            <Dialog
                onClose={this.props.handleClose}
                aria-labelledby="customized-dialog-title"
                open={this.props.open === 'LogInOpen'}
            >
                <DialogTitle id="customized-dialog-title" onClose={this.props.handleClose}>
                    LogIn
                </DialogTitle>
                <form onSubmit={(e) => this.logIn(e)}>
                    <DialogContent>

                        <input onChange={(e) => this.logInMali(e)} type='email' placeholder='e-mail'/><br/>
                        <input onChange={(e) => this.logInPassword(e)} type='password' placeholder='password'/><br/>

                        <p className='error'> { this.state.errorMessage } </p>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" type="submit" value="Submit">
                            Log In
                        </Button>
                    </DialogActions>
                </form>

            </Dialog>
        );
    }
}

export default LogIn