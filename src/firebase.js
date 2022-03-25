import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {

  // https://firebase.google.com/docs/web/setup#available-libraries

    apiKey: "AIzaSyCZ93DEqBoi2bkANbfbT0DEADv23fg77yw",
    authDomain: "crimereportingandawareness.firebaseapp.com",
    databaseURL: "https://crimereportingandawareness-default-rtdb.firebaseio.com",
    projectId: "crimereportingandawareness",
    storageBucket: "crimereportingandawareness.appspot.com",
    messagingSenderId: "222183099855",
    appId: "1:222183099855:web:261f9a25f771961af1d6ba"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
  const db = firebase.firestore();
  const storage = firebase.storage();
 

  export {auth,googleAuthProvider,facebookAuthProvider,db,storage};    