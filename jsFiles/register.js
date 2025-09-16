import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCSUIPuHp0Urpyug-Ag0AQVrfNHQN_WVxI",
  authDomain: "playora-test.firebaseapp.com",
  projectId: "playora-test",
  storageBucket: "playora-test.appspot.com",
  messagingSenderId: "240808267250",
  appId: "1:240808267250:web:d31aea86bac4826d112f6b",
  measurementId: "G-JS56S7TB3K"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Signup logic
document.getElementById("signupBtn").addEventListener("click", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("name").value.trim();
  const schoolName = document.getElementById("school_name").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!fullName || !schoolName || !username || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // ✅ Save username to Firebase profile
      updateProfile(user, { displayName: username })
        .then(() => {
          // ✅ Save details locally
          localStorage.setItem("username", username);
          localStorage.setItem("fullName", fullName);
          localStorage.setItem("schoolName", schoolName);

          alert("Signup successful!");
          window.location.href = "../Student/studash.html";
        })
        .catch((error) => {
          console.error("Profile update failed:", error);
        });
    })
    .catch((error) => {
      alert(error.message);
      console.error(error);
    });
});
