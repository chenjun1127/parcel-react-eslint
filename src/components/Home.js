import React from 'react';
import styles from '../assets/css/home';
import { Switch, Route, Link } from 'react-router-dom';
import Hoc from '../views/Hoc';
import About from '../views/About';
import NotFound from '../views/NotFound';
import Context from '../views/Context';
import Fragments from '../views/Fragments';
import Hooks from '../views/Hooks';

export default class Home extends React.Component {
  render() {
    return (
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link to="/home/about">About</Link>
          <Link to="/home/context">Context</Link>
          <Link to="/home/fragments">Fragments</Link>
          <Link to="/home/hoc">Hoc</Link>
          <Link to="/home/hooks">Hooks</Link>
        </div>
        <div className={styles.right}>
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/home/about" component={About} />
            <Route path="/home/context" component={Context} />
            <Route path="/home/fragments" component={Fragments} />
            <Route path="/home/hoc" component={Hoc} />
            <Route path="/home/hooks" component={Hooks} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}
