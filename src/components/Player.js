import React, { Component } from 'react';
import Logo from '../images/logo.svg';
import Forward from '../images/forward.svg';
import Down from '../images/down.svg';

class Player extends Component {
  render() {
    return (
      <div>
        <div style={styles.sideBar}>
       <div style={styles.logoContainer}>
          <div style={styles.logo} />
        </div>
        </div>
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
  sideBar: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    height: '100%',
    width: '250px',
    backgroundColor: 'black',
  },

  playBar: {
    position: 'absolute',
    right: '0px',
    bottom: '0px',
    height: '245px',
    width: '80.5%',
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
    height: '68%',
    width: '80.5%',
    backgroundImage: 'linear-gradient(to top right, rgba(172, 29, 132, 0.9), rgba(97, 18, 106, 0.9), rgba(73, 15, 121, 0.9), rgba(28, 31, 50, 0.9))',
    backgroundSize: 'cover',
  },

  logoContainer: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '250px',
  },

  logo: {
    height: '100px',
    width: '100px',    
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    display: 'flex',
    justifyContent: 'center',
    alignItimes: 'center',
  },
}

export default Player;