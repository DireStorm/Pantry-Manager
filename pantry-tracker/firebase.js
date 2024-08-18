// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2pfqexCbNT4v9D_UeMaLZVgczstwjV_M",
    authDomain: "pantrymanager-5ffe6.firebaseapp.com",
    projectId: "pantrymanager-5ffe6",
    storageBucket: "pantrymanager-5ffe6.appspot.com",
    messagingSenderId: "453660831020",
    appId: "1:453660831020:web:cb1bea19ed7f2028121089",
    measurementId: "G-2Z1RRQ6Z2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firestore = getFirestore(app);

export {firestore}
