import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB--uqQ5RWc-WqekYzlzmcvdN81YOpbu8c",
  authDomain: "firstfirebase-4ac60.firebaseapp.com",
  databaseURL: "https://firstfirebase-4ac60.firebaseio.com",
  projectId: "firstfirebase-4ac60",
  storageBucket: "firstfirebase-4ac60.appspot.com",
  messagingSenderId: "1063246455040"
};
firebase.initializeApp(config);

firebase.firestore();

export default firebase;
