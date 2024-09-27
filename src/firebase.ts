import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
    apiKey: "AIzaSyAFaThEZso7usxpgOyPxlwO1Z_gwsKyFEY",
    authDomain: "wedding-54b7a.firebaseapp.com",
    databaseURL: "https://wedding-54b7a-default-rtdb.firebaseio.com",
    projectId: "wedding-54b7a",
    storageBucket: "wedding-54b7a.appspot.com",
    messagingSenderId: "257361340832",
    appId: "1:257361340832:web:1488576c8b6de989afdcc5"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
