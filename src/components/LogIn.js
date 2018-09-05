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
      <Container style={styles.bg}>
        <Container style={styles.container}>
          <Card style={styles.card}>
            <Image src={ Logo } style={styles.logo} />
            <br/>
            <br/>
            <text style={styles.text}>live. local. music.</text>
            <br/>
            <br/>
            {this.state.user ?
              <button onClick={this.logout}>Log Out</button> 
              :
              <Button center style={styles.google} onClick={this.login}>
                <Icon center name='google'/>Google</Button>                         
            }

          </Card>
        </Container>
      </Container>
    );
  }
}

const styles = {
  bg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundImage: `url(${Stage})`,
    backgroundSize: 'cover',
  },
  card: {
    height: 500,
    width: 800,
    backgroundColor: 'rgba(14, 15, 40, 0.80)',
    borderRadius: 10,
    boxShadow: 'none',
    marginLeft: 0
  },
  container: {
    marginTop: 150
  },
  logo: {
    height: 150,
    width: 250,
    marginTop: 40,
    marginLeft: 250
  },
  text: {
    color: 'white',
    fontSize: 80,
    marginLeft: 100,
  },
  google: {
    fontSize: 24,
    color: 'white',
    height: 42,
    width: 210,
    backgroundColor: 'rgba(220, 78, 65)',
  },
}

export default LogIn;