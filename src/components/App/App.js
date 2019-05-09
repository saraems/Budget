import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../landing-page/LandingPage'
import Register from "../landing-page/Register/Register";
import LogIn from "../landing-page/LogIn/LogIn";
import UserPanel from "../user-panel/UserPanel";


class App extends Component {
  render() {
    return (
            <HashRouter>
                <Switch>
                    <LandingPage exact path='/'/>
                    <Route path='/register' component={Register}/>
                    <Route path='/login' component={LogIn}/>
                    <UserPanel path='/user-panel' component={UserPanel}/>
                </Switch>
            </HashRouter>
    );
  }
}

export default App;
