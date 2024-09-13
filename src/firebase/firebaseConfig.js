// Import the functions you need from the SDKs you need
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB8P8d7Z9ekmplocvY5QXn9df6MTBcRK1k",
  authDomain: "fitmedidas.firebaseapp.com",
  projectId: "fitmedidas",
  storageBucket: "fitmedidas.appspot.com",
  messagingSenderId: "359892675517",
  appId: "1:359892675517:web:109e4dca431c635b4500d4",
  measurementId: "G-VE0VYQNWE3"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig,)
//const analytics = getAnalytics(app);

export const db = getFirestore(app)


export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
