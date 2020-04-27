import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Intro from "Pages/Intro";
import Main from "Pages/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
