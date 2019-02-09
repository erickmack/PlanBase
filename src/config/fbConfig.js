import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyD4ol58L8A-M6MQuDOkEK4Z_eKeJwUTP30",
  authDomain: "planbase-1c72a.firebaseapp.com",
  databaseURL: "https://planbase-1c72a.firebaseio.com",
  projectId: "planbase-1c72a",
  storageBucket: "planbase-1c72a.appspot.com",
  messagingSenderId: "467755822114"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
