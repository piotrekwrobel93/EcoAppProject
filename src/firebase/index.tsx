import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// FIREBASE CONFIG 
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    appId: process.env.APP_ID
  };



  firebase.initializeApp(firebaseConfig)


  export const auth :firebase.auth.Auth = firebase.auth()
  export const db :firebase.firestore.Firestore = firebase.firestore()