import React, { Component, Fragment } from 'react';
import './LandingPage.scss';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import Header from './Header/Header';
import queryString from 'query-string';



const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit * 3,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing.unit,
        top: theme.spacing.unit,
        color: theme.palette.grey[500],
    },
}))(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing.unit * 3,
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        borderTop: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit,
    },
}))(MuiDialogActions);

class LandingPage extends Component {

    state = {
       open: false,
        registerEmail: '',
        registerPassword: '',
        registerPasswordConfirmation: '',
        logInEmail: '',
        logInPassword: '',
        errorMessage: '',
    };

    handleClickOpen = (dialog) => {
        this.setState({
            open: dialog
        });
    };

    handleClose = (dialog) => {
        this.setState({
            open: dialog,
            errorMessage: '',
        });
    };

    logIn = (e) => {
        e.preventDefault();

        if (this.state.logInEmail && this.state.logInPassword) {

            const logIn = {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                body: {
                    username: this.logInEmail,
                    password: this.state.logInPassword
                }
            };

            fetch(`https://budget-app-back-end.herokuapp.com/login`, logIn)
                .then(res => res.json())
                .catch(err => console.log(err));

            console.log('logged!', this.state.logInPassword, this.state.logInEmail);
            this.setState({
                logInEmail: '',
                logInPassword: '',
            });
        } else {
            this.setState({
                errorMessage: '*need login and password in order to log in'
            })
        }
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

  render() {
    return (
        <Fragment>
            <Header handleClickOpen={ this.handleClickOpen }/>
            <Dialog
                            onClose={this.handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={this.state.open === 'RegisterOpen'}
                        >
                            <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                                Registration
                            </DialogTitle>
                            <form onSubmit={(e) => this.register(e)}>

                                <DialogContent>
                                      <input onChange={(e) => this.registerEmail(e)} type='email' placeholder='e-mail'/><br/>

                                    <input onChange={(e) => this.registerPassword(e)} type='password' placeholder='password'/><br/>

                                    <input onChange={(e) => this.registerPasswordConfirmation(e)} type='password' placeholder='confirm password'/>
                                    <p className='error'> { this.state.errorMessage } </p>
                                </DialogContent>
                                <DialogActions>
                                    <Button color="secondary" type="submit" value="Submit">
                                        Register
                                    </Button>
                                </DialogActions>

                            </form>
                        </Dialog>
                        <Dialog
                            onClose={this.handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={this.state.open === 'LogInOpen'}
                        >
                            <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
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
            <section className='app_desc'>
                <div className='page_container'>
                    <div className="app_desc_wrapper">
                        <div className="app_desc__left">
                            <h2>
                                Application which will allow you to <br/> take control over your private finances
                            </h2><br/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quam, unde! Ad architecto aspernatur autem cupiditate delectus deleniti distinctio eaque ex hic in, modi molestias odio quam quisquam quo, sequi, sint vero! Aut consequatur cupiditate dolor earum enim esse id ipsa, iure laboriosam laudantium obcaecati omnis porro quaerat quidem similique.
                            </p><br/>
                            <button className='square'> Before registration check demo</button>
                        </div>
                        <div className="app_desc__right">
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
  }
}

export default LandingPage;

