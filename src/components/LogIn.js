import React, { Component } from 'react';
import { Container, Card, Image, Button, Icon } from 'semantic-ui-react';
import Stage from '../images/stage.jpg';
import Logo from '../images/logo.svg';
import firebase, { auth, provider } from '../firebase.js';
// import { Link } from 'react-router-dom';

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
      debugger
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

  card: {
    position: 'absolute',
    left: '25px',
    height: '500px',
    width: '800px',
    backgroundColor: 'rgba(14, 15, 40, 0.80)',
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
    marginTop: '25px',
    textAlign: 'center',
    fontSize: '34px',
    color: 'white',
  },

  buttonContainer: {
    position: 'relative',
    top: '150px',
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