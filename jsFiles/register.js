// Import Firebase SDKs from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCSUIPuHp0Urpyug-Ag0AQVrfNHQN_WVxI",
  authDomain: "playora-test.firebaseapp.com",
  projectId: "playora-test",
  storageBucket: "playora-test.appspot.com",
  messagingSenderId: "240808267250",
  appId: "1:240808267250:web:d31aea86bac4826d112f6b",
  measurementId: "G-JS56S7TB3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // ✅ Use getAuth here

// Submit button logic
const submit = document.getElementById('register');
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registration successful
      const user = userCredential.user;
      alert("User registered successfully!");
      console.log(user);
      window.location.href=""
    })
    .catch((error) => {
      // Handle errors
      alert(error.message);
      console.error(error);
    });
});

