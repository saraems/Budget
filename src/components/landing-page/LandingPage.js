import React, { Component, Fragment } from 'react';
import './LandingPage.scss';


import Header from './Header/Header';
import Register from "./Register/Register";
import LogIn from "./LogIn/LogIn";


class LandingPage extends Component {

    state = {
       open: false,
        registerEmail: '',
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

  render() {
    return (
        <Fragment>
            <Header handleClickOpen={ this.handleClickOpen }/>
            <Register open={this.state.open} handleClose={this.handleClose}/>
            <LogIn  open={this.state.open} handleClose={this.handleClose}/>


            <section className='app_desc'>
                <div className='page_container'>
                    <div className="app_desc_wrapper">
                        <div className="app_desc__left">
                            <h2>
                                Uporządkuj finanse i przejmij kontrolę nad swoim budżetem używając tylko jednej aplikacji
                            </h2><br/>
                            <p>
                                Niezależność fianansowa dla wielu nie kojarzy się z niczym konkretnym, albo wydaje się być niemożliwa do osiągnięcia bez ponadprzeciętnego talentu do zarządznia pieniędzmi. Każda nadwyżka w budżecie domowym często rozchodzi się tak szybko jak szybko się pojawia. Nowy sprzęt elektorniczny, prezenty, sprzęt domowy, ubrania, coraz lepsze jedznie, smaochód, wakacje, drugi samochów, kredyt hipoteczny, trzeci samochów, wakacje… Staropolskie porzekadło „postaw się, a zastwa się” wydaje się dotyczyć ponad połowy Polaków, chyba po prostu z natury lubimy wydawać pieniądze.
                            </p><br/>
                            <button className='square'> Wypróbuj aplikację za darmo</button>
                        </div>
                        <div className="app_desc__right">
                            <ul>
                                <li><p>Planuj i kontroluj wydatki</p></li>
                                <li className='hidden'></li>
                                <li className='hidden'></li>
                                <li className='hidden'></li>
                            </ul>
                            {/*<span className='left_arrow'> &lt; </span>*/}
                            {/*<span className='right_arrow'> ➤ </span>*/}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
  }
}

export default LandingPage;

