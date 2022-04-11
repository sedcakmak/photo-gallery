import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiv1fGJhWMx_5nZi2OruyOjDyHW7NH4xY",
  authDomain: "photo-gallery-979ea.firebaseapp.com",
  projectId: "photo-gallery-979ea",
  storageBucket: "photo-gallery-979ea.appspot.com",
  messagingSenderId: "798589147493",
  appId: "1:798589147493:web:dbc3c663aaf857e28ea98c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
