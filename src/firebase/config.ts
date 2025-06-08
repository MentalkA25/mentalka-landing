import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyB8QvQvQvQvQvQvQvQvQvQvQvQvQvQvQvQ",
  authDomain: "mentalka-95fa1.firebaseapp.com",
  projectId: "mentalka-95fa1",
  storageBucket: "mentalka-95fa1.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef",
  measurementId: "G-ABCDEF1234"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics }; 