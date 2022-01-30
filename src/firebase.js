import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp6PSAlp6NIqutJZiomI9_dKQIkgznUpk",
  authDomain: "fb-cover-6b653.firebaseapp.com",
  projectId: "fb-cover-6b653",
  storageBucket: "fb-cover-6b653.appspot.com",
  messagingSenderId: "170850382392",
  appId: "1:170850382392:web:2360b72cd9d94266a26ccd",
  measurementId: "G-7HPL81CXS9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth,provider}
export default db;