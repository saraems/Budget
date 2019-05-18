import React, { Component, Fragment } from 'react';
import './UserPanel.scss';


class UserPanel extends Component {

  render() {
    return (
        <Fragment>
            <header className='user_panel__header'>
                <div className="page_container user_panel__header_container">
                    <div className='user_panel_nav__logo'> Twoje Finanse </div>
                    <ul className="user_panel__nav">
                        <li>Dodaj</li>
                        <li>Wydatki</li>
                        <li>Porownaj</li>
                        <li>Oszczednosci</li>
                    </ul>
                </div>
            </header>

            <main>
                <div className="user_panel___main_panel page_container">
                    <div className="row">

                        <section className="col-12-12 user_panel__add_document">
                            <div className='user_panel__add_document__header'> Dodaj podsumowanie</div>
                            <div className='user_panel__add_document__header_subheader'>Wybierz plik <span className='highlighted'>.csv</span> lub <span className='highlighted'>.xml</span>.</div>
                            <div className='user_panel__add_document__tip'> Nie wiesz gdzie je znalezc? Pobierz je ze swojego konta bankowego on-line.</div>
                            <a className='uploader__btn action__btn'>Wybierz dokument</a>
                            <p className='user_panel__add_document__form'>Jesli nie masz konta w banku, lub nie mozesz uzyskac podsumowania miesiaca w podamym formacie. <br/>Dodaj swoje wydatki za pomoca formularza:</p>
                            <a className="add_form_btn action__btn">Wypelnij formularz</a>
                        </section>
                        <section className="user_panel__add_previous_months">

                        </section>

                    </div>
                </div>
            </main>
        </Fragment>
    );
  }
}

export default UserPanel;

