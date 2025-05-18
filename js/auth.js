import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCP17SNnk0a4vH03wTQlK66rxy8SfTXKWY",
  authDomain: "studentcupid-0714aj.firebaseapp.com",
  projectId: "studentcupid-0714aj",
  storageBucket: "studentcupid-0714aj.appspot.com",
  messagingSenderId: "199869211019",
  appId: "1:199869211019:web:098405fb4a486971128f8e",
  measurementId: "G-CYR3K4TXMS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.loginUser = async function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (!email.endsWith("@ggits.net")) {
    message.textContent = "Only GGITS college emails allowed.";
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    message.textContent = "Login successful!";
    window.location.href = "swipe.html";
  } catch (err) {
    message.textContent = "Login failed: " + err.message;
  }
};

window.signupUser = async function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (!email.endsWith("@ggits.net")) {
    message.textContent = "Only GGITS college emails allowed.";
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await sendEmailVerification(user);
    message.textContent = "Verification email sent!";
    window.location.href = "verify.html";
  } catch (err) {
    message.textContent = "Signup failed: " + err.message;
  }
};
