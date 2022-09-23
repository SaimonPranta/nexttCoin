import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



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





//   // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBSXMMyu2_VJ9myKkXz7mv1tNKLltd1Yec",
//   authDomain: "my-investment-site.firebaseapp.com",
//   projectId: "my-investment-site",
//   storageBucket: "my-investment-site.appspot.com",
//   messagingSenderId: "251555849764",
//   appId: "1:251555849764:web:70e745bb3dc91202ad5ab1",
//   measurementId: "G-Y0HTG5WG0Z"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);