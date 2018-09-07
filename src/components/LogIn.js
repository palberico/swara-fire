import React, { Component } from 'react';
import { Container, Card, Image, Button, Icon } from 'semantic-ui-react';
import Stage from '../images/stage.jpg';
import Logo from '../images/logo.svg';
import Forward from '../images/forward.svg';
import firebase, { auth, provider } from '../firebase.js';

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
        <div style={styles.forward} />
        <div style={styles.card}>
          <div style={styles.logoContainer}>
            <div style={styles.logo} />
          </div>
          <div style={styles.catchPhrase}>
            live. local. music.
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
    marginLeft: '420px', 
    marginTop: '80px', 
    backgroundImage: `url(${Forward})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    animation: 'pulse 3s infinite'
  },

  card: {
    position: 'absolute',
    left: '0px',
    marginTop: '50px',
    height: '500px',
    width: '800px',
    backgroundColor: 'rgba(14, 15, 40, 0.80)',
    borderStyle: 'solid',
    borderImage: 'linear-gradient(90deg, #0E0F28, #217AD8)',
    borderImageSlice: '1',
    borderWidth: '1px'
  
  },

  logoContainer: {
    marginTop: '25px',
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
  }
}

export default LogIn;