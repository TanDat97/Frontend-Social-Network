import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'
import 'firebase/firebase-database'
import 'firebase/firebase-storage'

 var config = {
    apiKey: "AIzaSyCNn-6ZIpbpYwwcorr_TnxgLaktmuFzBek",
    authDomain: "blockchain-3752f.firebaseapp.com",
    databaseURL: "https://blockchain-3752f.firebaseio.com",
    projectId: "blockchain-3752f",
    storageBucket: "blockchain-3752f.appspot.com",
    messagingSenderId: "400603133507"
  };


firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;