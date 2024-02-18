import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyBuA7dfIIkvUERzKhGIgoO9lYTvh9Jwcpk",
  authDomain: "qim-lp.firebaseapp.com",
  projectId: "qim-lp",
  storageBucket: "qim-lp.appspot.com",
  messagingSenderId: "695661246018",
  appId: "1:695661246018:web:d6335e705e33858a921fdb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
