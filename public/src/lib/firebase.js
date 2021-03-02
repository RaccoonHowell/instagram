import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import the seed file
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyC99u9-850z9QHOA2_fSszieqGvIKgcmVg",
    authDomain: "instagr-9fdb1.firebaseapp.com",
    databaseURL: "https://instagr-9fdb1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "instagr-9fdb1",
    storageBucket: "instagr-9fdb1.appspot.com",
    messagingSenderId: "1072634543933",
    appId: "1:1072634543933:web:323fada8e9f73299d6cf54"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// call the seed file
//seedDatabase(firebase);

export { firebase, FieldValue };