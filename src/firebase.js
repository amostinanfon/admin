//import firebase from 'firebase'
import { initializeApp } from "firebase/app";




const firebaseConfig = {

  apiKey: "AIzaSyAGXc9n4ejggwRAnQMCJ5j9pQyJbjdly-M",

  authDomain: "ecommerce-1db01.firebaseapp.com",

  projectId: "ecommerce-1db01",

  storageBucket: "ecommerce-1db01.appspot.com",

  messagingSenderId: "179234840737",

  appId: "1:179234840737:web:756aca261b9fc4217750e0"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const storage = app.storage

export default storage;