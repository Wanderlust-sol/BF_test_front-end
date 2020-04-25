import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Intro from "Pages/Intro";
import Main from "Pages/Main/Main";
import QuestionWindow from "Components/QuestionWindow";
import Result from "Components/ResultWindow/Result";
import Contributor from "Components/Contributor";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/question" component={QuestionWindow} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/contributor" component={Contributor} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
