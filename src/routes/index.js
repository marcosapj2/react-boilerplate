import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import React from 'react';
import Home from '../containers/Home';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}
