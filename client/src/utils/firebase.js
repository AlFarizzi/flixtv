import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAXqoUJwb_j_nk9CSPvWLCynrY-drv9Qmk",
    authDomain: "flixtv-ccb2b.firebaseapp.com",
    projectId: "flixtv-ccb2b",
    storageBucket: "flixtv-ccb2b.appspot.com",
    messagingSenderId: "205618827470",
    appId: "1:205618827470:web:98f00e3dcaa1be447c409f",
    measurementId: "G-F6T458NNL9"
  };
  
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage(); 
export {storage, firebase as default}