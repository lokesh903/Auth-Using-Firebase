import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

const firebaseConfig = {
  apiKey: "AIzaSyBzT4Ga8A_RtoswVwAag3C5GtqM0D4RC1E",
  authDomain: "auth-through-firebase.firebaseapp.com",
  projectId: "auth-through-firebase",
  storageBucket: "auth-through-firebase.appspot.com",
  messagingSenderId: "313705873693",
  appId: "1:313705873693:web:85fea239274de4f3dea1f4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth()
export default app















