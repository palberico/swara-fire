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
            <text style={styles.text}>Live. Local. Music.</text>

            {this.state.user ?
              <button onClick={this.logout}>Log Out</button> 
              :
              <Button color='google plus' onClick={this.login}>
                <Icon name='google plus'/>Google</Button>                            
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
    // border: 25,
    // borderColor: 'rgba(23, 82, 170)',
    backgroundColor: 'rgba(6, 0, 55, 0.82)',
  },
  container: {
    marginTop: 160
  },
  logo: {
    height: 150,
    width: 150,
    marginTop: 40,
    marginLeft: 325
  },
  text: {
    color: 'white',
    fontSize: 90,
    marginLeft: 20,
  },
}

export default LogIn;