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
        LogInOpen: false,
    };

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = () => {
        this.setState({ open: false });
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
            <button className='btn log_in' color="primary">Log In</button>
            <button className='btn register' color="secondary" onClick={this.handleClickOpen}>Register</button>
              <Dialog
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
              >
                  <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                      Registration
                  </DialogTitle>
                  <DialogContent>
                      <Typography gutterBottom>
                        <input type='email' placeholder='e-mail'/><br/>
                        <input type='password' placeholder='password'/><br/>
                        <input type='password' placeholder='confirm password'/>
                      </Typography>
                  </DialogContent>
                  <DialogActions>
                      <Button onClick={this.handleClose} color="secondary">
                          Register
                      </Button>
                  </DialogActions>
              </Dialog>
          </section>
        </nav>
      </div>
    );
  }
}

export default LandingPage;
