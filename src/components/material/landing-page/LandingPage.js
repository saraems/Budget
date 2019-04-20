import React, { Component } from 'react';
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
        logInPassword: ''
    };

    handleClickOpen = (dialog) => {
        this.setState({
            open: dialog
        });
    };

    handleClose = (dialog) => {
        this.setState({
            open: dialog
        });
    };

    logIn = (e) => {
        e.preventDefault();
        console.log('logged!', this.state.logInPassword, this.state.logInEmail);
        this.setState({
            logInEmail: '',
            logInPassword: '',
        })
    };

    register = (e) => {
        e.preventDefault();
        if (this.state.registerEmail.includes('.' && '@') && this.state.registerPassword === this.state.registerPasswordConfirmation) {
            console.log('registered!', this.state.registerEmail, this.state.registerPassword);
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
      <div className="landing_page_container">
        <nav className='landing_page_card'>
            <h1>Your Budget. Save for freedom.
              <div className='logo'>
              </div>
            </h1>
          <section className='landing_page_btns_container'>
            <button className='btn log_in' color="primary" onClick={() => this.handleClickOpen('LogInOpen')}>Log In</button>
            <button className='btn register' color="secondary" onClick={() => this.handleClickOpen('RegisterOpen')}>Register</button>
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
                             { this.state.registerEmail.includes('.') ? '' : 'incorrect e-mail' }<br/>

                          <input onChange={(e) => this.registerPassword(e)} type='password' placeholder='password'/><br/>
                          { this.state.registerPassword < 6 ?  '' : 'password is too short'}<br/>

                          <input onChange={(e) => this.registerPasswordConfirmation(e)} type='password' placeholder='confirm password'/>
                          { this.state.registerPassword === this.state.registerPasswordConfirmation ?  '' : 'passwords do not match'}<br/>
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
                      </DialogContent>
                      <DialogActions>
                          <Button onClick={this.handleClose} color="primary" type="submit" value="Submit">
                              Log In
                          </Button>
                      </DialogActions>
                  </form>

              </Dialog>
          </section>
        </nav>
      </div>
    );
  }
}

export default LandingPage;
