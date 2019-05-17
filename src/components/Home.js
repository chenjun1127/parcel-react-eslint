import React from 'react';
import styles from '../assets/css/home';
import {Switch, Route, Link} from 'react-router-dom';
import Main from '../components/Main';
import About from '../components/About';
import NotFound from '../views/NotFound';

export default class Home extends React.Component {
  render() {
    return (
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link to="/home/about">about</Link>
          <Link to="/home/main">main</Link>
        </div>
        <div className={styles.right}>
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/home/about" component={About} />
            <Route path="/home/main" component={Main} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}
