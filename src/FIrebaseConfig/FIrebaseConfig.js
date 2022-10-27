import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Apps Create on This Gmail
// gtravel637@gmail.com 


const firebaseConfig = {
  apiKey: "AIzaSyBSXMMyu2_VJ9myKkXz7mv1tNKLltd1Yec",
  authDomain: "my-investment-site.firebaseapp.com",
  projectId: "my-investment-site",
  storageBucket: "my-investment-site.appspot.com",
  messagingSenderId: "251555849764",
  appId: "1:251555849764:web:70e745bb3dc91202ad5ab1",
  measurementId: "G-Y0HTG5WG0Z"
};



const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
