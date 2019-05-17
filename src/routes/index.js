import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';

const Routes = () => (
  <Router>
    <Header name="组件" />
    <Switch>
      <Route path="/" component={Home} />
      // 等同于下面 // <Route path="/home" component={Home} />
      // <Redirect path="/" to="/home" />
    </Switch>
  </Router>
);
export default Routes;
