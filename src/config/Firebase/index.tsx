// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAFSv-Xbd2gakVSbhnrZrFqMJ8l5I07KXo',
  authDomain: 'projectmadfinal.firebaseapp.com',
  projectId: 'projectmadfinal',
  storageBucket: 'projectmadfinal.appspot.com',
  messagingSenderId: '67644526428',
  appId: '1:67644526428:web:db0f8039eb411764c67b99',
  databaseURL: 'https://projectmadfinal-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
