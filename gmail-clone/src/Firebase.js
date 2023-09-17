import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB82MRWFVKnzwjixACF9Gsi7utsESvQBuE",
    authDomain: "clone-2e034.firebaseapp.com",
    projectId: "clone-2e034",
    storageBucket: "clone-2e034.appspot.com",
    messagingSenderId: "848085103445",
    appId: "1:848085103445:web:f246cd4d9bdb186493b5dc",
    measurementId: "G-G6L9MK1V61"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider} ;
