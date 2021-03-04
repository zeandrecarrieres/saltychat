import firebase from 'firebase'

const config  = {
    apiKey: "AIzaSyAPcdYKyfov4enMYMVd8qgkVoN4RgKi3WQ",
    authDomain: "saltychat-30c99.firebaseapp.com",
    projectId: "saltychat-30c99",
    storageBucket: "saltychat-30c99.appspot.com",
    messagingSenderId: "73202238330",
    appId: "1:73202238330:web:3c00be11d33f59ed78ccc3"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth 
export const db = firebase.firestore()