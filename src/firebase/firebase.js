import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD5O0pnEC-_KjBOKFKIOcN4z0JlO-roq7M",
  authDomain: "rollandbox-59ffa.firebaseapp.com",
  projectId: "rollandbox-59ffa",
  storageBucket: "rollandbox-59ffa.appspot.com",
  messagingSenderId: "174134916874",
  appId: "1:174134916874:web:9767a1a12dd4d91521ecf3"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };