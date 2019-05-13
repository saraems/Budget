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
                        <li>Oszczednosci</li>
                    </ul>
                </div>
            </header>
        </Fragment>
    );
  }
}

export default UserPanel;

