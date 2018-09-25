import React, { Component } from 'react';
// import Logo from '../images/logo.svg';
import Forward from '../images/forward.svg';
import Down from '../images/down.svg';

class Register extends Component {
  render() {
    return (
      <div>
      <div style={styles.card}>
            <div style={styles.down} />
            <div style={styles.forward} />
          </div>
          <div style={styles.playBar} />
      </div>
    );
  }
}

const styles = {
  playBar: {
    position: 'absolute',
    right: '0px',
    bottom: '0px',
    height: '150px',
    width: '100%',
    backgroundColor: '#4A4A4A',
  },

  forward: {
    height: '50px',
    width: '50px',
    float: 'right',  
    backgroundImage: `url(${Forward})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    animation: 'pulse 3s infinite',
  },

  down: {
    height: '50px',
    width: '50px',  
    backgroundImage: `url(${Down})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    animation: 'pulse 3s infinite',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '0px',
  },

  card: {
    position: 'absolute',
    right: '0px',
    top: '0px',
    height: '80%',
    width: '100%',
    backgroundImage: 'linear-gradient(to top right, rgba(172, 29, 132, 0.9), rgba(97, 18, 106, 0.9), rgba(73, 15, 121, 0.9), rgba(28, 31, 50, 0.9))',
    backgroundSize: 'cover',
  },
}

export default Register;