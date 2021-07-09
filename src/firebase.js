import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBX6Ci07Oy_aejC8nUARTxoRy-Sfnc4eFI",
  authDomain: "disney-plus-home-clone.firebaseapp.com",
  projectId: "disney-plus-home-clone",
  storageBucket: "disney-plus-home-clone.appspot.com",
  messagingSenderId: "531752623215",
  appId: "1:531752623215:web:b05ae14f03fcfd9895c19a",
  measurementId: "G-KHTT6ZFGT4",
};

firebase.initializeApp(firebaseConfig);

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
