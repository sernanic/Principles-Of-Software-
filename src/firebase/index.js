import firebase from 'firebase/app' 
import 'firebase/storage';
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'

var firebaseConfig = {
    apiKey: "AIzaSyBFICmc5Ps5DEJ3UZF1zSjMwFhNi8IXiyI",
    authDomain: "researchsearch.firebaseapp.com",
    databaseURL: "https://researchsearch.firebaseio.com",
    projectId: "researchsearch",
    storageBucket: "researchsearch.appspot.com",
    messagingSenderId: "996542836873",
    appId: "1:996542836873:web:f14efdd7c97a6665fe1658"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const auth = firebase.auth();
  export {
      storage,auth,firebase as default
  }