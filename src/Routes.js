import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "Pages/Main/Main";
import Intro from "Pages/Intro";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/intro" component={Intro} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
