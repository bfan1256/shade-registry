import {initializeApp} from 'firebase/app'
import {Analytics, getAnalytics, isSupported} from 'firebase/analytics'
import {getFirestore, initializeFirestore} from '@firebase/firestore'
import {getStorage} from '@firebase/storage'
import {getAuth} from '@firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBOPWkvmv1Of7An2ARcnVnREgjeHe6kmLM',
  authDomain: 'shade-prod.firebaseapp.com',
  databaseURL: 'https://shade-prod-default-rtdb.firebaseio.com',
  projectId: 'shade-prod',
  storageBucket: 'shade-prod.appspot.com',
  messagingSenderId: '31788493009',
  appId: '1:31788493009:web:02c00bbd2de43f27273df0',
  measurementId: 'G-9GH3NZRNKF'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
initializeFirestore(app, {ignoreUndefinedProperties: true})

let analytics: undefined | Analytics

isSupported().then(supported => {
  if (!supported) return
  analytics = getAnalytics(app)
})

const auth = getAuth()
const db = getFirestore()
const storage = getStorage()

export {app, db, storage, auth, analytics}
