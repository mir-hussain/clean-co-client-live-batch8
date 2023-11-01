import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAu3ehYTM558k3GM9AYMc6twicloGbf3Mw',
  authDomain: 'test-7a62c.firebaseapp.com',
  projectId: 'test-7a62c',
  storageBucket: 'test-7a62c.appspot.com',
  messagingSenderId: '603651291008',
  appId: '1:603651291008:web:4d39d6996ea094a2b43365',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
