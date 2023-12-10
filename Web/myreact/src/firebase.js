// firebase.js
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

// firebaseConfig 정보로 firebase 시작
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firebase DB 정보
const storage = getStorage(app); // Firebase Storage 정보

export {
    app,
    db,
    storage,
    ref,
    uploadBytes,
    getDownloadURL
};
