import * as firebase from 'firebase'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXgsJ4hufHCehWfU3eH0ynpsGdfDM8ySU",
    authDomain: "ninos-and-minos.firebaseapp.com",
    projectId: "ninos-and-minos",
    storageBucket: "ninos-and-minos.appspot.com",
    messagingSenderId: "15397029895",
    appId: "1:15397029895:web:d8e6973681a1ca75b8c2a2",
    measurementId: "G-2TDMXEDXN3"
  };


firebase.initiallizerApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth, db, storage};

































