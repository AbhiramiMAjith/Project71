import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyD6cjSFxMoG0g0WF1sqVHeGSo56KQg3tT8",
    authDomain: "e-ride-17b05.firebaseapp.com",
    projectId: "e-ride-17b05",
    storageBucket: "e-ride-17b05.appspot.com",
    messagingSenderId: "684414980323",
    appId: "1:684414980323:web:8615e21497788744e675d6"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
