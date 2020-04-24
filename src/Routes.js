import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "Pages/Main/Main";
import QuestionWindow from "Components/QuestionWindow";
import Result from "Components/ResultWindow/Result";

import Intro from "Pages/Intro";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          <Route exact path="/question" component={QuestionWindow} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/intro" component={Intro} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
