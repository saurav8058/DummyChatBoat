import  {initializeApp} from "firebase/app"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhTS6wAxoyBUtdN4uEdIkeaWYPA89f40A",
    authDomain: "chatboat-eee4a.firebaseapp.com",
    projectId: "chatboat-eee4a",
    storageBucket: "chatboat-eee4a.appspot.com",
    messagingSenderId: "128947020546",
    appId: "1:128947020546:web:9054ec4889eb299729181b",
    databaseUrl:"https://chatboat-eee4a-default-rtdb.firebaseio.com"
  };

  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);