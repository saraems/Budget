import React, { Component, Fragment } from 'react';
import './UserPanel.scss';


class UserPanel extends Component {

  render() {
    return (
        <Fragment>
            <header className='user_panel__header'>
                <div className="page_container">
                    <ul className="user_panel__nav">
                        <div className='user_panel_nav__logo'> Twoje Finanse </div>
                        <li>Poprzedni miesiac</li>
                        <li>Wydatki</li>
                        <li>Porownaj</li>
                        <li>Oszczednosci</li>
                    </ul>
                </div>
            </header>

            <main>
                <div className="user_panel___main_panel page_container">
                    <div className="row">

                        <section className="col-12-12 user_panel__add_current_month">
                            <h1> Dodaj podsumowanie z poprzedniego miesiaca</h1>
                            <h2>Wybierz plik <span className='file_format'>.csv</span> lub <span className='file_format'>.xml</span>. Nie wiesz gdzie je znalezc? Pobierz je ze swojego konta bankowego on-line.</h2>
                            <a className='select_file_btn'>Wybierz</a>
                            <p>Jesli nie masz konta w banku, lub nie mozesz uzyskac podsumowania miesiaca w podamym formacie. Nic straconego! Dodaj swoje wydatki za pomoca formularza.</p>
                            <a className="add_monthly_expenses">Dodaj</a>
                        </section>
                        <section className="user_panel__add_previous_months">

                        </section>

                    </div>
                </div>
            </main>
            <div className="user_panel">
                <div className="page_container">
                    <div className="main_panel">

                    </div>
                </div>
            </div>
        </Fragment>
    );
  }
}

export default UserPanel;

