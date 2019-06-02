import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import "./UserPanel.scss";

import Header from "./Header/Header";
import Upload from "./Upload/Upload";
import Evaluation from "./Evaluation/Evaluation";
import Comparison from "./Comparison/Comparison";
import Expenses from "./Expenses/Expenses";
import Savings from "./Savings/Savings";

class UserPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: ""
    };
  }

  readFile = e => {
    const files = e.target.files;

    this.setState({
      filePath: files[0].name
    });

    let reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.onload = e => {
      // console.warn("loaded", e.target.result)
      // url, fetch to the backend - end the file, POST
      // .then => {}
    };
  };

  render() {
    return (
      <HashRouter>
        <Header />
        <Switch>
          <main>
            <div className="user_panel___main_panel page_container">
              <Route
                exact
                path="/home"
                component={Upload}
                filePath={this.state.filePath}
              />
              <Route exact path="/home/evaluation" component={Evaluation} />
              <Route exact path="/home/expenses" component={Expenses} />
              <Route exact path="/home/comparison" component={Comparison} />
              <Route exact path="/home/savings" component={Savings} />
            </div>
          </main>
        </Switch>
      </HashRouter>
    );
  }
}

export default UserPanel;
