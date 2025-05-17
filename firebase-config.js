// Firebase config will be added here
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyCP17SNnk0a4vH03wTQlK66rxy8SfTXKWY",
  authDomain: "studentcupid-0714aj.firebaseapp.com",
  projectId: "studentcupid-0714aj",
  storageBucket: "studentcupid-0714aj.appspot.com",  
  messagingSenderId: "199869211019",
  appId: "1:199869211019:web:098405fb4a486971128f8e",
  measurementId: "G-CYR3K4TXMS"
};


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
    const auth = getAuth(app);