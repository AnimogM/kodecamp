// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCeA5AViGmd6PvWsOm_DRo4NFRzZ2p6q0w',
  authDomain: 'kodecamp-lms.firebaseapp.com',
  projectId: 'kodecamp-lms',
  storageBucket: 'kodecamp-lms.appspot.com',
  messagingSenderId: '77917151635',
  appId: '1:77917151635:web:0d8d666a874d32b42b8866',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
