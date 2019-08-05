import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import "./UserPanel.scss";

import Header from "./Header/Header";
import Upload from "./Upload/Upload";
import Evaluation from "./Evaluation/Evaluation";
import Comparison from "./Comparison/Comparison";
import Expenses from "./Expenses/Expenses";
import Savings from "./Savings/Savings";
import Uploaded from "./Uploaded/Uploaded.jsx";

class UserPanel extends Component {
  render() {
    return (
      <HashRouter>
        <Header />
        <Switch>
          <main>
            <div className="user_panel___main_panel page_container">
              <Route exact path="/home" component={Upload} />
              <Route exact path="/home/evaluation" component={Evaluation} />
              <Route exact path="/home/expenses" component={Expenses} />
              <Route exact path="/home/comparison" component={Comparison} />
              <Route exact path="/home/savings" component={Savings} />
              <Route exact path="/home/upload" component={Uploaded} />
            </div>
          </main>
        </Switch>
      </HashRouter>
    );
  }
}

export default UserPanel;
