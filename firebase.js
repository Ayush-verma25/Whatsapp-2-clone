import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD31NDOREUZi1tMHjOmqw4rJuoimwMGWw4",
  authDomain: "whatsapp-2-clone-d7b41.firebaseapp.com",
  projectId: "whatsapp-2-clone-d7b41",
  storageBucket: "whatsapp-2-clone-d7b41.appspot.com",
  messagingSenderId: "76227651180",
  appId: "1:76227651180:web:feeb1652690830909c5a49",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
