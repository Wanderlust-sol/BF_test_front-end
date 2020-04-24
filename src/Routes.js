import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "Pages/Main/Main";
import QuestionWindow from "Components/QuestionWindow";
import Intro from "Pages/Intro";
import Contributor from "Components/Contributor";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/question" component={QuestionWindow} />
          <Route exact path="/intro" component={Intro} />
          <Route exact path="/contributor" component={Contributor} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
