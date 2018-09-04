import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDAvp0ijO_VBPCinyw53hjdszJ7dSLe7bU",
    authDomain: "swara-fire.firebaseapp.com",
    databaseURL: "https://swara-fire.firebaseio.com",
    projectId: "swara-fire",
    storageBucket: "swara-fire.appspot.com",
    messagingSenderId: "950060547677"
  };
  
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;