//DANGER!!!!!!!!!
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO5jb8tw2P83u5NePiqUemN865lw9JecI",
  authDomain: "artify-client-d88f7.firebaseapp.com",
  projectId: "artify-client-d88f7",
  storageBucket: "artify-client-d88f7.firebasestorage.app",
  messagingSenderId: "856807003751",
  appId: "1:856807003751:web:4f99c2edcbae7bddcca6c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
