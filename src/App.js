import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import Player from './components/Player';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/player" component={Player} />
        <Route exaxt path="/register" component={Register} />
      </div>
    )
  }
}

const styles = {
  app: {
    height: '100%',
  },
}

export default App;