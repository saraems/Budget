import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import './Header.scss';


class Header extends Component {


    render() {
    return (
        <Fragment>
            <header className='user_panel__header'>
                <div className="page_container user_panel__header_container">
                    <Link to='/user-panel/' className='user_panel_nav__logo'> Twoje Finanse </Link>
                    <ul className="user_panel__nav">
                        <Link to='/user-panel/evaluation'>Podsumowania</Link>
                        <Link to='/user-panel/expenses'>Wydatki</Link>
                        <Link to='/user-panel/comparison'>Porownaj</Link>
                        <Link to='/user-panel/savings'>Oszczednosci</Link>
                    </ul>
                </div>
            </header>
        </Fragment>
    );
  }
}

export default Header;
