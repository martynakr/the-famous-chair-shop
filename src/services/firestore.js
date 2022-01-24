// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDSNsKK0dmyPXqRyg0TnS5F8188Z5lT2I",
  authDomain: "the-famous-chair-store-2.firebaseapp.com",
  projectId: "the-famous-chair-store-2",
  storageBucket: "the-famous-chair-store-2.appspot.com",
  messagingSenderId: "972245838548",
  appId: "1:972245838548:web:67e57ee2411d801fb22941"
};

firebase.initializeApp(firebaseConfig)

// Initialize Firebase
const firestore = firebase.firestore();

export default firestore; //exporting a Firestore object