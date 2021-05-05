import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcp0pcLmUDPGJzmh7pUqFIb6z5A_TCf6Y",
  authDomain: "eatpicker-afba3.firebaseapp.com",
  projectId: "eatpicker-afba3",
  storageBucket: "eatpicker-afba3.appspot.com",
  messagingSenderId: "17768832034",
  appId: "1:17768832034:web:e29752cea50ace474abe7b",
  measurementId: "G-FJDRJHFK2S",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
