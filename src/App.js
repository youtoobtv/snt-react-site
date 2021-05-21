import React  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import LandingPage from "./page/Landing";
import Main from "./page/Main";
import Donations from "./page/Donation";


export default function BasicExample() {
  let history = useHistory();
  return (
    <Router>
      <Switch>
        <Route path="/reward" component={Main} history={history} />
        <Route path="/donation" component={Donations} history={history} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}
