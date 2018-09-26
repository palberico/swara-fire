import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import Player from './components/Player';
import Register from './components/Register';
import Navigation from './components/Navigation';
import * as routes from './constants/routes';

class App extends Component {
  render() {
    return (
    <Router>
      <div style={styles.app}>
        <Navigation />
        <Route exact path={routes.LOGIN} component={LogIn} />
        <Route exact path={routes.PLAYER} component={Player} />
        <Route exaxt path={routes.REGISTER} component={Register} />
      </div>
    </Router>
    )
  }
}

const styles = {
  app: {
    height: '100%',
  },
}

export default App;