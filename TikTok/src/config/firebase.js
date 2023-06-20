import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBzbOKlRqLizTzrQJw1eTAuVZPTNLUU8MM",
  authDomain: "tiktok-projeto-naty.firebaseapp.com",
  projectId: "tiktok-projeto-naty",
  storageBucket: "tiktok-projeto-naty.appspot.com",
  messagingSenderId: "733417644978",
  appId: "1:733417644978:web:46652af7ffcc1d7d8b3aab"
};


const app = initializeApp(firebaseConfig);
const db= getFirestore(app);

export default db;