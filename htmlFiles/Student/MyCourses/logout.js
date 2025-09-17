// ✅ Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCSUIPuHp0Urpyug-Ag0AQVrfNHQN_WVxI",
  authDomain: "playora-test.firebaseapp.com",
  projectId: "playora-test",
  storageBucket: "playora-test.appspot.com",
  messagingSenderId: "240808267250",
  appId: "1:240808267250:web:d31aea86bac4826d112f6b",
  measurementId: "G-JS56S7TB3K"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// ✅ Logout functionality
const logoutBtn = document.getElementById("logoutButton");
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      localStorage.clear();   // clear local storage
      window.location.href = "../../../index.html";
      alert("You have been logged out successfully.");
    })
    .catch((error) => {
      console.error("Error signing out:", error);
      alert("Error signing out. Please try again.");
    });
});