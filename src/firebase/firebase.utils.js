import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBbfVSiygN8j1epQiQiMLC71SzcC4B6DvI',
  authDomain: 'crwn-db-178f0.firebaseapp.com',
  databaseURL: 'https://crwn-db-178f0.firebaseio.com',
  projectId: 'crwn-db-178f0',
  storageBucket: 'crwn-db-178f0.appspot.com',
  messagingSenderId: '449443683271',
  appId: '1:449443683271:web:d7ec99dafba73656a9d7e2',
  measurementId: 'G-9B8E36J1SM',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
