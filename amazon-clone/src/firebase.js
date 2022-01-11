// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: ' ',
  authDomain: 'clone-de.firebaseapp.com',
  projectId: 'clone-de',
  storageBucket: 'clone-de.appspot.com',
  messagingSenderId: '580390311724',
  appId: ' ',
  measurementId: 'G-YRP737YEXR',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
