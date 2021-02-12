import React, { Component } from 'react';
import Firebase, { auth, provider } from '../firebase/firebase';


class Register extends Component {
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
          <div style={styles.buttonContainer}>  
          {this.state.user ?
            <div style={styles.googleBtn} onClick={this.logout}>Logout</div>
            :
            <div style={styles.googleBtn} onClick={this.login}>Google</div>
          }
          </div> 
    );
  }
}

const styles = {

  buttonContainer: {
    width: '100%',
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

export default Register;


//Ignore below, this is just here for me. 

// import React, { Component } from 'react';
// import { Link, withRouter, } from 'react-router-dom';
// import { auth } from '../firebase';


// import * as routes from '../constants/routes';

// const INITIAL_STATE = {
//   username: '',
//   email: '',
//   passwordOne: '',
//   passwordTwo: '',
//   error: null,
// };

// const SignUpPage = ({ history }) =>
//   <div>
//     <h1>SignUp</h1>
//     <SignUpForm />
//   </div>

// const byPropKey = (propertyName, value) => () => ({
//   [propertyName]: value,
// });

// class SignUpForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { ...INITIAL_STATE };
//   }

//   onSubmit = (event) => {
//     const {
//       username,
//       email,
//       passwordOne,
//     } = this.state;
//     const {
//       history,
//     } = this.props;

//     auth.doCreateUserWithEmailAndPassword(email, passwordOne)
//       .then(authUser => {
//         this.setState({ ...INITIAL_STATE });
//         history.push(routes.PLAYER);
//       })
//       .catch(error => {
//         this.setState(byPropKey('error', error));
//       });

//     event.preventDefault();

//   }

//   render() {
//     const {
//       username,
//       email,
//       passwordOne,
//       passwordTwo,
//       error,
//     } = this.state;

//     const isInvalid =
//       passwordOne !== passwordTwo ||
//       passwordOne === '' ||
//       email === '' ||
//       username === '';

//     return (
//       <form onSubmit={this.onSubmit}>
//       <input
//           value={username}
//           onChange={event => this.setState(byPropKey('username', event.target.value))}
//           type="text"
//           placeholder="Full Name"
//         />
//         <input
//           value={email}
//           onChange={event => this.setState(byPropKey('email', event.target.value))}
//           type="text"
//           placeholder="Email Address"
//         />
//         <input
//           value={passwordOne}
//           onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
//           type="password"
//           placeholder="Password"
//         />
//         <input
//           value={passwordTwo}
//           onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
//           type="password"
//           placeholder="Confirm Password"
//         />
//         <button disabled={isInvalid} type="submit">
//           Sign Up
//         </button>

//         { error && <p>{error.message}</p> }

//       </form>
//     );
//   }
// }

// const SignUpLink = () =>
//   <p>
//     Don't have an account?
//     {' '}
//     <Link to={routes.SIGN_UP}>Sign Up</Link>
//   </p>

// export default withRouter(SignUpPage);

// export {
//   SignUpForm,
//   SignUpLink,
// };
