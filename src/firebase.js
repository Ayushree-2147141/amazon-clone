// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD5rq-Hv2g1i0tfLhIYyp_v4IkHDUdZnMY",
    authDomain: "challenge-783d5.firebaseapp.com",
    projectId: "challenge-783d5",
    storageBucket: "challenge-783d5.appspot.com",
    messagingSenderId: "887015203932",
    appId: "1:887015203932:web:6da3f1406eeb60ddc67299",
    measurementId: "G-H15VLHJG3S"
  };

// initialize the app
const firebaseApp = initializeApp(firebaseConfig);

//initialize the database
const db = getFirestore(firebaseApp);

//authentication
const auth = getAuth(firebaseApp);

export {db, auth};