import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';
import 'firebase/storage';
// import {firebaseConfig} from "./config";

const firebaseConfig = {
    apiKey: "AIzaSyC8xFegHY3MntMmBhGq2igFt0DNJRFuciI",
    authDomain: "linkedin-clone-c35d2.firebaseapp.com",
    projectId: "linkedin-clone-c35d2",
    storageBucket: "linkedin-clone-c35d2.appspot.com",
    messagingSenderId: "680448829436",
    appId: "1:680448829436:web:d1561f4b7484d0bc5ff479"
  };

  const firebaseaApp=firebase.initializeApp(firebaseConfig)

  const  db=firebaseaApp.firestore();

  const auth= firebase.auth();

  const storage=firebase.storage();

  const provider= new firebase.auth.GoogleAuthProvider();

  const timestamp=firebase.firestore.FieldValue.serverTimestamp();

  export {db,provider,auth,storage,timestamp}