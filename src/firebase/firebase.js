import firebase from 'firebase/app'
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAO5m6tRPns8fN1Fo0Q7VcARQUYJw4ZPjQ",
    authDomain: "dashboard-f6bd4.firebaseapp.com",
    projectId: "dashboard-f6bd4",
    storageBucket: "dashboard-f6bd4.appspot.com",
    messagingSenderId: "654139288042",
    appId: "1:654139288042:web:715caaf6acbb82f24d2a93"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

