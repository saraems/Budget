import React, { Component } from 'react';
import './Header.scss'

import { Link } from 'react-router-dom';



class Header extends Component {

  render() {
    return (
            <header>
                <div className='page_container'>
                    <div className="nav_wrapper">
                        <h1>
                            Your budget. Save for freedom.
                        </h1>
                        <nav>
                            <ul>
                                <li>
                                    <Link  to='/register' className='btn' onClick={() => this.props.handleClickOpen('RegisterOpen')}>
                                        <span>Register</span>
                                    </Link>
                                </li>
                                <li>
                                    <a className='btn' onClick={() => this.props.handleClickOpen('LogInOpen')}>
                                       <span>Log in</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
    );
  }
}

export default Header;
