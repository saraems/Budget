import React, { Component, Fragment } from 'react';
import './LandingPage.scss';


import Header from './Header/Header';
import Register from "./Register/Register";
import LogIn from "./LogIn/LogIn";
import SectionFirst from "./Section_first/Section_first";
import Footer from "./Footer/Footer";


class LandingPage extends Component {

    state = {
        errorMessage: '',
    };

    handleClickOpen = (dialog) => {

        console.log(dialog)
        if (dialog === 'LogInOpen') {
            document.querySelector('.login_dialog').style.display = 'flex';
        } else if (dialog === 'RegisterOpen') {
            document.querySelector('.register_dialog').style.display = 'flex';
        }
    };

    handleClose = (dialog) => {
        this.setState({
            open: dialog,
            errorMessage: '',
        });
    };

    blur = (dialog) => {
        if (dialog === 'LogInOpen') {
            document.querySelector('.login_dialog').style.display = 'none';
        } else if (dialog === 'RegisterOpen') {
            document.querySelector('.register_dialog').style.display = 'none';
        }
    };

  render() {
    return (
        <Fragment>
            <Header handleClickOpen={ this.handleClickOpen }/>
            <SectionFirst/>
            <Register open={this.state.open} handleClose={this.handleClose} blur={ this.blur }/>
            <LogIn open={this.state.open} handleClose={this.handleClose} blur={ this.blur }/>
            <Footer/>
        </Fragment>
    );
  }
}

export default LandingPage;
