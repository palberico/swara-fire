import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Forward from '../images/forward.svg';
import Down from '../images/down.svg';

import * as routes from '../constants/routes';

class Navigation extends Component {
  render() {
    return (
      <div style={styles.iconContainer}>
        <Link style={styles.forward} to={routes.REGISTER} />
        <Link style={styles.down} to={routes.PLAYER} />
        {/* <Link to={routes.LOGIN}>Sign In</Link> */}
      </div>
     )
    }
  }

const styles = {
iconContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    left: '0px',
    top: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  forward: {
    height: '50px',
    width: '50px',
    backgroundImage: `url(${Forward})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    animation: 'pulse 3s infinite',
    position: 'absolute',
    right: '0px',  
  },

  down: {
    height: '50px',
    width: '50px',  
    backgroundImage: `url(${Down})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    animation: 'pulse 3s infinite',
    position: 'absolute',
    bottom: '0px',
  },
}

export default Navigation;