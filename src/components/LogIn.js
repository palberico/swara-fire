import React, { Component } from 'react';
import { Container, Card, Image, Button, Icon } from 'semantic-ui-react';
import Stage from '../images/stage.jpg';
import Logo from '../images/logo.svg';
import Forward from '../images/forward.svg';
import Down from '../images/down.svg';
import Firebase, { auth, provider } from '../firebase.js';

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this); 
  }

  handleChange(e) {
  }
    logout() {
      auth.signOut()
        .then(() => {
        this.setState({
        user: null
      });
    });
  }
    login() {
      auth.signInWithPopup(provider) 
        .then((result) => {
          const user = result.user;
          this.setState({
            user
        });
      });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  } 



  render() {
    return (
      <div style={styles.app}>
        <div style={styles.card}>
          <div style={styles.logoContainer}>
            <div style={styles.down} />
              <div style={styles.logo} />
          </div>
          <div style={styles.catchPhrase}>
            live. local. music.
            <div style={styles.forward} />
          </div>
          <div style={styles.buttonContainer}>
            <div style={styles.googleBtn} onClick={this.login}>
              Google
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundImage: `url(${Stage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },

  forward: {
    height: '50px',
    width: '50px',
    float: 'right',  
    backgroundImage: `url(${Forward})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    animation: 'pulse 3s infinite'
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
    left: '0px',
    top: '0px',
    height: '100%',
    width: '100%',
    backgroundImage: 'linear-gradient(to top right, rgba(172, 29, 132, 0.9), rgba(97, 18, 106, 0.5), rgba(73, 15, 121, 0.5), rgba(28, 31, 50, 0.9))',
    backgroundSize: 'cover',
  },

  logoContainer: {
    marginTop: '125px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },

  logo: {
    height: '150px',
    width: '150px',    
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    display: 'flex',
    justifyContent: 'center',
  },

  catchPhrase: {
    marginTop: '50px',
    textAlign: 'center',
    fontSize: '80px',
    color: 'white',
  },

  buttonContainer: {
    position: 'relative',
    top: '100px',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '30px',
  },

  googleBtn: {
    backgroundColor: 'rgba(220, 78, 65)',
    color: 'white',
    width: '145px',
    height: '50px',
    lineHeight: '45px',
    cursor: 'pointer',
  },
}

export default LogIn;